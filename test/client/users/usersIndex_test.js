/* global describe, it, beforeEach, before, after, */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Promise from 'bluebird';
import Axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import UsersIndex from '../../../src/components/UsersIndex';

const userData = [{
  id: 1,
  firstName: 'Truman',
  lastName: 'Faldo',
  email: 'tru@tru.com',
  username: 'Trumanjags',
  lookalike: 'Mick Jagger',
  bio: 'Just here for fun. no time wasters please',
  sex: 'male',
  interestedIn: 'women',
  password: 'password',
  passwordConfirmation: 'password',
  image: 'http://www.talentbookingusa.com/look-a-likes/images/mick-jagger-rw-b.jpg'
}, {
  id: 2,
  firstName: 'Rilo',
  lastName: 'Wilbee',
  email: 'cher@me.com',
  username: 'Chersomeloving',
  lookalike: 'Cher',
  bio: 'I just want someone to get to know the real me',
  sex: 'female',
  interestedIn: 'men',
  password: 'password',
  passwordConfirmation: 'password',
  image: 'https://d3ew4rh7xxgmkq.cloudfront.net/performer/13333/photos/13333-0bb7e2f4ffc748fdbdcac808d5d902a9-1.jpg'
}];

describe('userIndex tests', () => {
  let wrapper = null;
  let promise = null;

  before(done => {
    promise = Promise.resolve({ data: userData });
    sinon.stub(Axios, 'get').returns(promise);
    done();
  });

  after(done => {
    Axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter>
        <UsersIndex />
      </MemoryRouter>
    );
    done();
  });
  it('should display user items', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.image-tile').length).to.eq(2);
      done();

    });
  });
});
