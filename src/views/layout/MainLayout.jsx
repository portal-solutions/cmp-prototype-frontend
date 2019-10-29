/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import PropTypes from 'prop-types';
import React from 'react';
import AppNavBar from './AppNavBar';
import GlobalHeader from './GlobalHeader';
import PageDetails from './PageDetails';
import SecondaryNavigation from './SecondaryNavigation';

const MainLayout = ({ children, showSignIn }) => (
  <>
    <GlobalHeader />
    <AppNavBar showSignIn={showSignIn} />
    <main property="mainContentOfPage" typeof="WebPageElement">
      <div className="container" style={{ marginTop: '5rem' }}>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-4">
            <SecondaryNavigation />
          </div>
          <div className="col-lg-9 col-md-9 col-sm-8">
            {children} <PageDetails />
          </div>
        </div>
      </div>
    </main>
  </>
);

MainLayout.defaultProps = {
  showSignIn: true
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showSignIn: PropTypes.bool
};

export default MainLayout;
