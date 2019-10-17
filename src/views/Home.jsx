/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className="container" style={{ marginTop: '5rem' }}>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4">
            <ul className="nav nav-pills nav-stacked">
              <li role="presentation" className="active">
                <Link to="/">
                  <FontAwesomeIcon fixedWidth icon={faHome} style={{ marginRight: '1rem' }} />
                  <span>Home</span>
                </Link>
              </li>
              <li role="presentation">
                <Link to="/profile">
                  <FontAwesomeIcon fixedWidth icon={faUser} style={{ marginRight: '1rem' }} />
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-8">
            <h1 style={{ margin: '0rem' }}>Enter new meeting</h1>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
