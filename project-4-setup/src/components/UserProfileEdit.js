import React from 'react';
import Axios from 'axios';

import UserForm from './UserForm';
import Auth from '../lib/Auth';

class UserProfileEdit extends React.Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      lookalike: '',
      bio: '',
      sex: '',
      interestedIn: '',
      password: '',
      passwordConfirmation: '',
      image: ''
    },
    errors: {}
  };

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({user: res.data}))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: {name, value } }) => {
    const user = Object.assign({},
      this.state.user, { [name]: value  });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/users/${this.props.match.params.id}`, this.state.user, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.props.history.push(`/users/${res.data.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <h1 className="register-title">Edit</h1>
        <UserForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          user={this.state.user}
          errors={this.state.errors}
        />
      </div>
    );
  }
}


export default UserProfileEdit;
