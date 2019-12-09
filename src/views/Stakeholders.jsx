/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */

/**
 * Copyright (c) Portal Solutions and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @author Greg Baker <gregory.j.baker@hrsdc-rhdcc.gc.ca>
 */

import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { usePageDetails } from '../components/PageDetailsProvider';
import pageIds from '../page-ids';
import MainLayout from './layout/MainLayout';

const dummyStakeholders = [
  {
    name: 'CIBC',
    location: 'Amman, Jordan',
    type: 'Banking',
    contactName: 'IITB',
    contactEmail: 'iitb@shareables.ca',
    contactPerson: 'Omar Al-Dib'
  },
  {
    name: 'LinkdIn',
    location: 'Ottawa, Ontario',
    type: 'Social/E-Learning',
    contactName: 'IITB',
    contactEmail: 'iitb@shareables.ca',
    contactPerson: 'Omar Al-Dib'
  },
  {
    name: 'Instagram',
    location: 'Ottawa, Ontario',
    type: 'Social/E-Learning',
    contactName: 'IITB',
    contactEmail: 'iitb@shareables.ca',
    contactPerson: 'Omar Al-Dib'
  },
  {
    name: 'CarletonU',
    location: 'Ottawa, Ontario',
    type: 'Social/E-Learning',
    contactName: 'IITB',
    contactEmail: 'iitb@shareables.ca',
    contactPerson: 'Omar Al-Dib'
  },
  {
    name: 'RBC',
    location: 'Ottawa, Ontario',
    type: 'Social/E-Learning',
    contactName: 'IITB',
    contactEmail: 'iitb@shareables.ca',
    contactPerson: 'Omar Al-Dib'
  },
  {
    name: 'Udemy',
    location: 'Ottawa, Ontario',
    type: 'Social/E-Learning',
    contactName: 'IITB',
    contactEmail: 'iitb@shareables.ca',
    contactPerson: 'Omar Al-Dib'
  }
];

const Stakeholders = () => {
  const { setPageDetails } = usePageDetails();

  useEffect(() => setPageDetails({ pageId: pageIds.stakeholders }), [setPageDetails]);

  return (
    <MainLayout>
      <h1 id="wb-cont" property="name">
        List of stakeholders
      </h1>
      <NewStakeholder />
      <Search />
      <SearchResults />
      <ActionButtons />
    </MainLayout>
  );
};

const ActionButtons = () => (
  <div className="row">
    <div className="col-md-4">
      <button type="button" className="btn btn-lg btn-block z-depth-1">
        Print report
      </button>
    </div>
    <div className="col-md-4">
      <button type="button" className="btn btn-lg btn-block z-depth-1">
        Add comments
      </button>
    </div>
    <div className="col-md-4">
      <button type="button" className="btn btn-lg btn-block z-depth-1">
        View profile
      </button>
    </div>
  </div>
);

const NewStakeholder = () => (
  <div className="text-right">
    <button type="button" className="btn z-depth-1">
      New <FontAwesomeIcon fixedWidth icon={faPlus} />
    </button>
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

const SearchResults = () => (
  <div className="table-responsive">
    <table className="table table-bordered table-condensed table-striped mrgn-tp-lg">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Theme/Type</th>
          <th scope="col">Key Contact + Email</th>
          <th scope="col">ESDC Contact</th>
        </tr>
      </thead>
      <tbody>
        {dummyStakeholders.map((stakeholder) => (
          <tr>
            <td>{stakeholder.name}</td>
            <td>{stakeholder.location}</td>
            <td>{stakeholder.type}</td>
            <td>
              {stakeholder.contactName} (<a href={`mailto:${stakeholder.contactEmail}`}>{stakeholder.contactEmail}</a>)
            </td>
            <td>
              <a href="#">{stakeholder.contactPerson}</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Stakeholders;
