/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePageDetails } from '../../components/PageDetailsProvider';
import './PageDetails.scss';

const PageDetails = () => {
  const { t } = useTranslation('wet-boew');
  const { pageDetails } = usePageDetails();

  return (
    <div className="pagedetails clearfix">
      {(pageDetails.pageId || pageDetails.dateModified || pageDetails.version) && (
        <dl id="wb-dtmd">
          {pageDetails.pageId && (
            <>
              <dt>{t('page-details.screen-identifier')}</dt>
              <dd property="identifier">{pageDetails.pageId}</dd>
            </>
          )}
          {pageDetails.dateModified && (
            <>
              <dt>{t('page-details.date-modified')}</dt>
              <dd>
                <time property="dateModified">{pageDetails.dateModified}</time>
              </dd>
            </>
          )}
          {pageDetails.version && (
            <>
              <dt>{t('page-details.version')}</dt>
              <dd property="version">
                {pageDetails.version}-{pageDetails.gitCommit}
              </dd>
            </>
          )}
        </dl>
      )}
    </div>
  );
};

export default PageDetails;
