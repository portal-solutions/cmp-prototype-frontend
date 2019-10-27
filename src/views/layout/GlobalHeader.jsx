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

const GlobalHeader = () => {
  const { i18n, t } = useTranslation('wet-boew');

  const toggleLanguage = () => {
    const isFrench = i18n.language.startsWith('fr');
    i18n.changeLanguage(isFrench ? 'en' : 'fr');
  };

  return (
    <div className="global-header">
      <nav>
        <ul id="wb-tphp">
          <li className="wb-slc">
            <a className="wb-sl" href="#wb-cont">
              {t('header.skip-links.main-content')}
            </a>
          </li>
          <li className="wb-slc">
            <a className="wb-sl" href="#wb-info">
              {t('header.skip-links.about-government')}
            </a>
          </li>
        </ul>
      </nav>

      <header>
        <div id="wb-bnr" className="container">
          <section id="wb-lng" className="text-right">
            <h2 className="wb-inv">{t('language-selection')}</h2>
            <div className="row">
              <div className="col-md-12">
                <ul className="list-inline margin-bottom-none">
                  <li>
                    <button
                      lang={t('language-lang')}
                      type="button"
                      className="btn btn-link"
                      onClick={toggleLanguage}
                      style={{ padding: '0rem' }}
                    >
                      {t('header.language-toggle')}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className="row">
            <div className="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
              <a href={t('header.canada-href')} property="url">
                <img src={t('header.brand-img-href')} alt="" property="logo" />
                <span className="wb-inv" property="name">
                  {t('header.brand-text')}
                </span>
              </a>
              <meta property="areaServed" typeof="Country" content="Canada" />
              <link property="logo" href={t('header.brand-logo.href')} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default GlobalHeader;
