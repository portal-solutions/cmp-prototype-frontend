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
import GlobalHeader from './GlobalHeader';
import AppNavBar from './AppNavBar';

const MainLayout = ({ children, showSignIn }) => {
  return (
    <>
      <GlobalHeader />
      <AppNavBar showSignIn={showSignIn} />
      {children}
    </>
  );
};

MainLayout.defaultProps = {
  showSignIn: true
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  showSignIn: PropTypes.bool
};

export default MainLayout;
