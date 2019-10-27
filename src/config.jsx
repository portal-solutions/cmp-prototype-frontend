/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

/* eslint-disable import/prefer-default-export */

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import preval from 'preval.macro';
import { initReactI18next } from 'react-i18next';

i18n // configure i18next subsystem (see https://www.i18next.com/ for more info)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`
    },
    detection: {
      caches: ['localStorage'],
      lookupLocalStorage: 'locale',
      lookupQuerystring: 'locale',
      order: ['querystring', 'localStorage', 'navigator']
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // JSX escapes by default
    },
    load: 'languageOnly',
    ns: ['wet-boew'],
    whitelist: ['en', 'fr']
  });

const dateModified = preval(`
  module.exports = new Date().toISOString().slice(0, 10)
`);

const gitCommit = preval(`
  module.exports = require("child_process")
    .execSync("git rev-parse HEAD")
    .toString().substring(0, 8)
`);

const application = {
  dateModified,
  debug: process.env.REACT_APP_DEBUG,
  gitCommit,
  version: process.env.REACT_APP_VERSION
};

export { application };
