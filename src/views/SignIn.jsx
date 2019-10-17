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
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  Grid,
  InputGroup,
  Row
} from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../components/AuthProvider';
import AppNavBar from './layout/AppNavBar';
import GlobalHeader from './layout/GlobalHeader';
import sleep from '../utils/sleep.util';

const Error = () => (
  <Alert bsStyle="danger">
    <span>Invalid username or password.</span>
  </Alert>
);

const Title = () => (
  <h1 className="h2 text-center" style={{ border: 'none', margin: '0rem', padding: '0rem' }}>
    <span style={{ color: '#f77', display: 'block' }}>Stakeholder</span>
    <span
      style={{
        color: '#777',
        display: 'block',
        fontStyle: 'italic',
        fontWeight: 'normal',
        marginTop: '-0.75rem'
      }}
    >
      Engager
    </span>
  </h1>
);

const Warning = () => (
  <Alert bsStyle="warning" style={{ marginTop: '3rem' }}>
    <span>You must log in to access this resource.</span>
  </Alert>
);

const SignIn = () => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();

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
          <Col xs={12} sm={8} smOffset={2} md={6} mdOffset={3}>
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
                      <ControlLabel className="sr-only">Email address</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Email address"
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
                      <ControlLabel className="sr-only">Password</ControlLabel>
                      <FormControl
                        type="password"
                        placeholder="Password"
                        style={{ width: '100%' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </InputGroup>
                  </FormGroup>

                  <Checkbox value={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}>
                    Remember me
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
                      <FontAwesomeIcon fixedWidth icon={loading ? faSpinner : faSignInAlt} spin={loading} /> Sign in
                    </Button>
                    <Button componentClass="a" bsSize="large" bsStyle="link" href="#">
                      Forgot password?
                    </Button>
                  </div>
                </Form>
              </div>

              <div className="panel-footer text-center">
                <Button componentClass="a" bsSize="large" bsStyle="link" href="#">
                  Create an account
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default SignIn;
