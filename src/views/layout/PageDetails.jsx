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
import * as config from '../../config';
import './PageDetails.scss';

const PageDetails = () => {
  const { t } = useTranslation('wet-boew');

  const { dateModified, gitCommit, version } = config.application;

  return (
    <div className="pagedetails clearfix">
      {(dateModified || version) && (
        <dl id="wb-dtmd">
          {dateModified && (
            <>
              <dt>{t('page-details.date-modified')}</dt>
              <dd>
                <time property="dateModified">{dateModified}</time>
              </dd>
            </>
          )}
          {version && (
            <>
              <dt>{t('page-details.version')}</dt>
              <dd property="version">
                {version}-{gitCommit}
              </dd>
            </>
          )}
        </dl>
      )}
    </div>
  );
};

export default PageDetails;
