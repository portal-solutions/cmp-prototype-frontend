/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import { faPowerOff, faSignInAlt, faSpinner, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider';
import sleep from '../../utils/sleep.util';

const AppNavBar = ({ showSignIn }) => {
  const auth = useAuth();
  const history = useHistory();
  const { t } = useTranslation();

  const [loading, setLoading] = useState();

  const handleSignOut = () => {
    setLoading(true);
    sleep(500) // added for dramatic effect
      .then(() => setLoading(false))
      .then(() => {
        auth.deauthenticate();
        history.push('/');
      });
  };

  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container">
          <ul className="nav navbar-nav navbar-left">
            <li>
              <Link to="/">
                <button className="btn btn-lg btn-link z-depth-0" type="button">
                  <span style={{ color: '#f77', fontWeight: 'bold' }}>{t('stakeholder')}</span>
                  <span>
                    <em>{t('engager')}</em>
                  </span>
                </button>
              </Link>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-right">
            {showSignIn && !auth.authContext && (
              <li>
                <Link to="/sign-in">
                  <button className="btn btn-lg btn-primary z-depth-1" type="button">
                    <FontAwesomeIcon fixedWidth icon={faSignInAlt} /> Sign in
                  </button>
                </Link>
              </li>
            )}
            {auth.authContext && (
              <>
                <li>
                  <Link to="/profile">
                    <button className="btn btn-lg btn-link z-depth-0" style={{ fontWeight: 'bold' }} type="button">
                      <span className="fa-layers fa-fw">
                        <FontAwesomeIcon fixedWidth icon={faUserAlt} style={{ marginRight: '1rem' }} />
                      </span>
                      {auth.authContext.name}
                    </button>
                  </Link>
                </li>
                <li style={{ padding: '13.5px 15px' }}>
                  <button className="btn btn-lg btn-danger z-depth-1" type="button" onClick={handleSignOut}>
                    <FontAwesomeIcon fixedWidth icon={loading ? faSpinner : faPowerOff} spin={loading} /> Sign out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

AppNavBar.defaultProps = {
  showSignIn: true
};

AppNavBar.propTypes = {
  showSignIn: PropTypes.bool
};

export default AppNavBar;
