/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import PropTypes from 'prop-types';
import React, { createContext, useContext, useReducer, useCallback } from 'react';
import * as config from '../config';

const { dateModified, gitCommit, version } = config.application;
const reducer = (state, newState) => ({ ...state, ...newState });

const pageDetailsContext = createContext();
const usePageDetails = () => useContext(pageDetailsContext);

const PageDetailsProvider = ({ children }) => {
  const [state, setState] = useReducer(reducer, { dateModified, gitCommit, version });

  return (
    <pageDetailsContext.Provider value={{ pageDetails: state, setPageDetails: useCallback(setState) }}>
      {children}
    </pageDetailsContext.Provider>
  );
};

PageDetailsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageDetailsProvider;
export { usePageDetails };
