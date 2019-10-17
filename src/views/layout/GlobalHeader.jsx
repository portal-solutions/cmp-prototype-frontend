/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import React from 'react';

const GlobalHeader = () => (
  <div className="global-header">
    <nav>
      <ul id="wb-tphp">
        <li className="wb-slc">
          <a className="wb-sl" href="#wb-cont">
            Skip to main content
          </a>
        </li>
        <li className="wb-slc">
          <a className="wb-sl" href="#wb-info">
            Skip to &quot;About government&quot;
          </a>
        </li>
      </ul>
    </nav>

    <header>
      <div id="wb-bnr" className="container">
        <section id="wb-lng" className="text-right">
          <h2 className="wb-inv">Language selection</h2>
          <div className="row">
            <div className="col-md-12">
              <ul className="list-inline margin-bottom-none">
                <li>
                  <a lang="fr" href="/fr.html">
                    Français
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="row">
          <div className="brand col-xs-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
            <a href="/en.html" property="url">
              <img src="//canada.ca/etc/designs/canada/wet-boew/assets/sig-blk-en.svg" alt="" property="logo" />
              <span className="wb-inv" property="name">
                Government of Canada
              </span>
            </a>
            <meta property="areaServed" typeof="Country" content="Canada" />
            <link property="logo" href="//canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" />
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default GlobalHeader;
