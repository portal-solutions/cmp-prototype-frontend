/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import React, { useEffect } from 'react';
import MainLayout from './layout/MainLayout';
import { usePageDetails } from '../components/PageDetailsProvider';

const Profile = () => {
  const { setPageDetails } = usePageDetails();

  useEffect(() => setPageDetails({ pageId: 'SE-0002' }), [setPageDetails]);

  return (
    <MainLayout>
      <h1 id="wb-cont" property="name">
        Your profile
      </h1>
    </MainLayout>
  );
};

export default Profile;
