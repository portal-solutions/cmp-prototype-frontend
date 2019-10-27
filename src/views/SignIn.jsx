/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import { faAt, faKey, faSignInAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {
  Alert,
  Button,
  Checkbox,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Grid,
  InputGroup,
  Row
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';
import sleep from '../utils/sleep.util';
import AppNavBar from './layout/AppNavBar';
import GlobalHeader from './layout/GlobalHeader';

const Error = () => (
  <Alert bsStyle="danger">
    <span>Invalid username or password.</span>
  </Alert>
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
    <Alert bsStyle="warning" style={{ marginTop: '3rem' }}>
      <span>{t('sign-in.you-must-login')}</span>
    </Alert>
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

      <Grid>
        <Row style={{ marginTop: '3rem' }}>
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <div className="panel panel-default z-depth-1">
              <div className="panel-body">
                <Title />

                {showWarning && <Warning />}

                <Form style={{ marginTop: '3rem' }} onSubmit={handleSubmit}>
                  <FormGroup controlId="email-address">
                    <InputGroup>
                      <InputGroup.Addon>
                        <FontAwesomeIcon fixedWidth icon={faAt} />
                      </InputGroup.Addon>
                      <ControlLabel className="sr-only">{t('sign-in.email-address')}</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder={t('sign-in.email-address')}
                        style={{ width: '100%' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>

                  <FormGroup controlId="password">
                    <InputGroup>
                      <InputGroup.Addon>
                        <FontAwesomeIcon fixedWidth icon={faKey} />
                      </InputGroup.Addon>
                      <ControlLabel className="sr-only">{t('sign-in.password')}</ControlLabel>
                      <FormControl
                        type="password"
                        placeholder={t('sign-in.password')}
                        style={{ width: '100%' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>

                  <Checkbox value={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}>
                    {t('sign-in.remember-me')}
                  </Checkbox>

                  {error && <Error />}

                  <div style={{ display: 'flex' }}>
                    <Button
                      type="submit"
                      bsSize="large"
                      bsStyle="primary"
                      className="z-depth-1"
                      style={{ flexGrow: '1' }}
                    >
                      <FontAwesomeIcon fixedWidth icon={loading ? faSpinner : faSignInAlt} spin={loading} />{' '}
                      {t('sign-in.sign-in')}
                    </Button>
                    <Button componentClass="a" bsSize="large" bsStyle="link" href="#">
                      {t('sign-in.forgot-password')}
                    </Button>
                  </div>
                </Form>
              </div>

              <div className="panel-footer text-center">
                <Button componentClass="a" bsSize="large" bsStyle="link" href="#">
                  {t('sign-in.create-account')}
                </Button>
              </div>
            </div>
          </div>
        </Row>
      </Grid>
    </>
  );
};

export default SignIn;
