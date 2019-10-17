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
import { Button, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../components/AuthProvider';
import sleep from '../../utils/sleep.util';

const AppNavBar = ({ showSignIn }) => {
  const auth = useAuth();
  const history = useHistory();

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
      <Navbar>
        <ul className="nav navbar-nav navbar-left">
          <li>
            <Link to="/">
              <Button bsSize="lg" bsStyle="link" className="z-depth-0">
                <span style={{ color: '#f77', fontWeight: 'bold' }}>Stakeholder</span>
                <span>
                  <em>Engager</em>
                </span>
              </Button>
            </Link>
          </li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
          {showSignIn && !auth.authContext && (
            <li>
              <Link to="/sign-in">
                <Button bsSize="lg" bsStyle="primary" className="z-depth-1">
                  <FontAwesomeIcon fixedWidth icon={faSignInAlt} /> Sign in
                </Button>
              </Link>
            </li>
          )}
          {auth.authContext && (
            <>
              <li>
                <Link to="/profile">
                  <Button bsSize="lg" bsStyle="link" className="z-depth-0" style={{ fontWeight: 'bold' }}>
                    <span className="fa-layers fa-fw">
                      <FontAwesomeIcon fixedWidth icon={faUserAlt} style={{ marginRight: '1rem' }} />
                    </span>
                    {auth.authContext.name}
                  </Button>
                </Link>
              </li>
              <li style={{ padding: '13.5px 15px' }}>
                <Button bsSize="lg" bsStyle="danger" className="z-depth-1" onClick={handleSignOut}>
                  <FontAwesomeIcon fixedWidth icon={loading ? faSpinner : faPowerOff} spin={loading} /> Sign out
                </Button>
              </li>
            </>
          )}
        </ul>
      </Navbar>
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
