/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

/* eslint-disable jsx-a11y/anchor-is-valid */

import { faAt, faKey, faSignInAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';
import sleep from '../utils/sleep.util';
import AppNavBar from './layout/AppNavBar';
import GlobalHeader from './layout/GlobalHeader';

const Error = () => (
  <div role="alert" className="alert alert-danger">
    <span>Invalid username or password.</span>
  </div>
);

const Title = () => {
  const { t } = useTranslation();

  return (
    <h1 className="h2 text-center" style={{ border: 'none', margin: '0rem', padding: '0rem' }}>
      <span style={{ color: '#f77', display: 'block' }}>{t('stakeholder')}</span>
      <span
        style={{
          color: '#777',
          display: 'block',
          fontStyle: 'italic',
          fontWeight: 'normal',
          marginTop: '-0.75rem'
        }}
      >
        {t('engager')}
      </span>
    </h1>
  );
};

const Warning = () => {
  const { t } = useTranslation();

  return (
    <div role="alert" className="alert alert-warning" style={{ marginTop: '3rem' }}>
      <span>{t('sign-in.you-must-login')}</span>
    </div>
  );
};

const SignIn = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { t } = useTranslation();

  const [email, setEmail] = useState('gregory.j.baker@hrsdc-rhdcc.gc.ca');
  const [password, setPassword] = useState('p@ssword1');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { from } = location.state || { from: '/' };
  const { showWarning } = location.state || { showWarning: false };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    sleep(500) // added for dramatic effect
      .then(() => setLoading(false))
      .then(() => {
        if (auth.authenticate(email, password, rememberMe)) {
          history.push(from);
        } else {
          setError(true);
        }
      });
  };

  return (
    <>
      <GlobalHeader />
      <AppNavBar showSignIn={false} />

      <div className="container">
        <div className="row" style={{ marginTop: '3rem' }}>
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div className="panel panel-default z-depth-1">
              <div className="panel-body">
                <Title />

                {showWarning && <Warning />}

                <form style={{ marginTop: '3rem' }} onSubmit={handleSubmit}>
                  <div className="form-group">
                    <span className="input-group">
                      <span className="input-group-addon">
                        <FontAwesomeIcon fixedWidth icon={faAt} />
                      </span>
                      <label htmlFor="email-address" className="sr-only control-label">
                        {t('sign-in.email-address')}
                      </label>
                      <input
                        type="text"
                        id="email-address"
                        placeholder={t('sign-in.email-address')}
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </span>
                  </div>

                  <div className="form-group">
                    <span className="input-group">
                      <span className="input-group-addon">
                        <FontAwesomeIcon fixedWidth icon={faKey} />
                      </span>
                      <label htmlFor="password" className="sr-only control-label">
                        {t('sign-in.password')}
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder={t('sign-in.password')}
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </span>
                  </div>

                  <div className="checkbox">
                    <label htmlFor="remember-me">
                      <input
                        type="checkbox"
                        id="remember-me"
                        value={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                      {t('sign-in.remember-me')}
                    </label>
                  </div>

                  {error && <Error />}

                  <div style={{ display: 'flex' }}>
                    <button className="btn btn-lg btn-primary z-depth-1" type="submit" style={{ flexGrow: '1' }}>
                      <FontAwesomeIcon fixedWidth icon={loading ? faSpinner : faSignInAlt} spin={loading} />{' '}
                      {t('sign-in.sign-in')}
                    </button>
                    <a className="btn btn-lg btn-link z-depth-0" type="button" href="#">
                      {t('sign-in.forgot-password')}
                    </a>
                  </div>
                </form>
              </div>

              <div className="panel-footer text-center">
                <a className="btn btn-lg btn-link z-depth-0" type="button" href="#">
                  {t('sign-in.create-account')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
