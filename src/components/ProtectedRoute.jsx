/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

/* eslint-disable react/jsx-props-no-spreading */

import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ component: Component, authorities, path, ...props }) => {
  const { authContext } = useAuth();

  // TODO :: GjB :: add authorities checks

  return (
    <Route {...props}>
      {authContext ? (
        <Component {...props} />
      ) : (
        <Redirect push to={{ pathname: '/sign-in', state: { from: path, showWarning: true } }} />
      )}
    </Route>
  );
};

ProtectedRoute.defaultProps = {
  authorities: []
};

ProtectedRoute.propTypes = {
  authorities: PropTypes.arrayOf(PropTypes.string),
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired
};

export default ProtectedRoute;
