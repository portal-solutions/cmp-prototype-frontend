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
import pageIds from '../page-ids';
import MainLayout from './layout/MainLayout';

const Profile = () => {
  const { setPageDetails } = usePageDetails();

  useEffect(() => setPageDetails({ pageId: pageIds.profile }), [setPageDetails]);

  return (
    <MainLayout>
      <h1 id="wb-cont" property="name">
        Your profile
      </h1>
    </MainLayout>
  );
};

export default Profile;
