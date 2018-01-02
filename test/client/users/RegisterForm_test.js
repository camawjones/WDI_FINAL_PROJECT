/* global describe, it */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RegisterForm from '../../../src/components/auth/RegisterForm';

describe('RegisterForm tests', () => {

  it('should render two imput fiends and one select', done => {
    const props = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        lookalike: '',
        bio: '',
        interestedIn: '',
        sex: '',
        password: '',
        image: ''
      },
      errors: {}
    };

    const wrapper = shallow(<RegisterForm {...props} />);
    expect(wrapper.find('input').length).to.equal(9);
    expect(wrapper.find('select').length).to.equal(2);
    done();
  });



  it('should populate the form', done => {
    const props = {
      user: {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        username: 'username',
        lookalike: 'lookalike',
        bio: 'bio',
        interestedIn: 'interestedIn',
        sex: 'sex',
        password: 'password',
        image: 'image'
      },
      errors: {}
    };



    const wrapper = shallow(<RegisterForm {...props} />);
    expect(wrapper.find({ value: 'firstName' }).length).to.equal(1);
    expect(wrapper.find({ value: 'lastName' }).length).to.equal(1);
    expect(wrapper.find({ value: 'email' }).length).to.equal(1);
    expect(wrapper.find({ value: 'username' }).length).to.equal(1);
    expect(wrapper.find({ value: 'lookalike' }).length).to.equal(1);
    expect(wrapper.find({ value: 'bio' }).length).to.equal(1);
    expect(wrapper.find({ value: 'interestedIn' }).length).to.equal(1);
    expect(wrapper.find({ value: 'sex' }).length).to.equal(1);
    expect(wrapper.find({ value: 'password' }).length).to.equal(1);
    expect(wrapper.find({ value: 'image' }).length).to.equal(1);
    done();
    //PASSED
  });
  it('should correctly display errors', done => {
    const props = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        lookalike: '',
        bio: '',
        interestedIn: '',
        sex: '',
        password: '',
        image: ''
      },
      errors: {
        firstName: 'FirstName is required',
        lastName: 'LastName is required',
        email: 'Email is required',
        username: 'Username is required',
        lookalike: 'Lookalike is required',
        bio: 'Bio is required',
        interestedIn: 'InterestedIn is required',
        sex: 'Sex is required',
        password: 'Password is required',
        image: 'Image is required'

      }
    };

    const wrapper = shallow(<RegisterForm {...props} />);
    expect(wrapper.find('div.form-group.has-error').length).to.equal(10);
    expect(wrapper.find('small.has-error').length).to.equal(10);
    done();

  });
});
