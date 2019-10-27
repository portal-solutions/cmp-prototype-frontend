/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Spinner = ({ size }) => (
  <FontAwesomeIcon
    spin
    icon={faSpinner}
    size={size}
    className="center-block"
    style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}
  />
);

Spinner.defaultProps = {
  size: '1x'
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['xs', 'lg', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'])
};

export default Spinner;
