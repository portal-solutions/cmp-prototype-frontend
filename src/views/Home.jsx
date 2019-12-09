/* eslint-disable jsx-a11y/label-has-associated-control */

/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import { faAddressCard, faHandshake, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageDetails } from '../components/PageDetailsProvider';
import MainLayout from './layout/MainLayout';
import pageIds from '../page-ids';

const Home = () => {
  const { setPageDetails } = usePageDetails();

  useEffect(() => setPageDetails({ pageId: pageIds.home }), [setPageDetails]);

  return (
    <MainLayout>
      <h1 id="wb-cont" property="name">
        Stakeholder engagement
      </h1>
      <p className="lead mrgn-bttm-0">What do you wish to do?</p>
      <div className="row">
        <div className="col-md-12">
          <Search />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Stakeholders />
        </div>
        <div className="col-md-6">
          <Meetings />
        </div>
      </div>
    </MainLayout>
  );
};

const Meetings = () => (
  <div className="mrgn-tp-lg">
    <button
      type="button"
      className="btn btn-block btn-lg btn-default z-depth-1"
      style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
    >
      <FontAwesomeIcon fixedWidth icon={faHandshake} /> <span>Meetings</span>
    </button>
    <p className="text-muted">View or edit past stakeholder meetings & engagements.</p>
  </div>
);

const Search = () => (
  <div className="mrgn-tp-lg">
    <form action="#" method="get" role="search">
      <label htmlFor="search" className="sr-only">
        Search website
      </label>
      <div className="input-group">
        <input
          id="search"
          className="form-control"
          name="q"
          type="search"
          placeholder="Search (name, location, subject, date...)"
        />
        <span className="input-group-btn">
          <button type="submit" id="search-submit" className="btn btn-default" style={{ padding: '0rem 5rem' }}>
            <FontAwesomeIcon fixedWidth icon={faSearch} title="Search" />
          </button>
        </span>
      </div>
    </form>
  </div>
);

const Stakeholders = () => (
  <div className="mrgn-tp-lg">
    <Link
      to="/stakeholders"
      className="btn btn-block btn-lg btn-default z-depth-1"
      style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
    >
      <FontAwesomeIcon fixedWidth icon={faAddressCard} /> <span>List Stakeholders</span>
    </Link>
    <p className="text-muted">View or edit the list of stakeholders and see their profiles, statuses or engagements.</p>
  </div>
);

export default Home;
