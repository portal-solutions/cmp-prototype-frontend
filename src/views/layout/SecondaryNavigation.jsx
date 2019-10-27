/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import PropTypes from 'prop-types';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ children, to }) => {
  const location = useLocation();

  return (
    <li role="presentation" className={location.pathname === to ? 'active' : null}>
      <Link to={to}>{children}</Link>
    </li>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

const SecondaryNavigation = () => (
  <ul className="nav nav-pills nav-stacked">
    <NavLink to="/">
      <FontAwesomeIcon fixedWidth icon={faHome} style={{ marginRight: '1rem' }} />
      <span>Home</span>
    </NavLink>
    <NavLink to="/profile">
      <FontAwesomeIcon fixedWidth icon={faUser} style={{ marginRight: '1rem' }} />
      <span>Profile</span>
    </NavLink>
  </ul>
);

export default SecondaryNavigation;
