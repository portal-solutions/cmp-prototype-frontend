/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import PropTypes from 'prop-types';
import React, { createContext, useContext, useState } from 'react';
import users from '../dummy-data/users.json';

const authContext = createContext();
const useAuth = () => useContext(authContext);

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(
    JSON.parse(localStorage.getItem('authContext') || sessionStorage.getItem('authContext'))
  );

  const authenticate = (username, password, persist) => {
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      const { name, uid } = user;
      const authentication = { name, uid };

      if (persist) {
        localStorage.setItem('authContext', JSON.stringify(authentication));
      } else {
        sessionStorage.setItem('authContext', JSON.stringify(authentication));
      }

      setState(authentication);
    }

    return user;
  };

  const deauthenticate = () => {
    localStorage.removeItem('authContext');
    sessionStorage.removeItem('authContext');
    setState(null);
  };

  return (
    <authContext.Provider value={{ authContext: state, authenticate, deauthenticate }}>{children}</authContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AuthProvider;
export { useAuth };
