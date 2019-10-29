/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import React, { useEffect } from 'react';
import { usePageDetails } from '../components/PageDetailsProvider';
import MainLayout from './layout/MainLayout';

const Home = () => {
  const { setPageDetails } = usePageDetails();

  // eslint-disable-next-line
  useEffect(() => setPageDetails({ pageId: 'SE-0001' }), []);

  return (
    <MainLayout>
      <h1 id="wb-cont" property="name">
        Enter new meeting
      </h1>
    </MainLayout>
  );
};

export default Home;
