import React from 'react';
import RegisterForm from './RegisterForm';
import Axios from 'axios';
import Auth from '../../lib/Auth';
import { Link } from 'react-router-dom';

class Register extends React.Component {
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

    handleChange = ({ target: { name, value }}) => {
      const user = Object.assign({}, this.state.user, { [name]: value });
      this.setState({ user });
    }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/users');
      })
      .then(res => console.log(res.data.token))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <div>
        <h1 className="register-title">Register</h1>
        <RegisterForm user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
        <Link to="/login">
          <p className="no-account">Already got an account? Login here!</p>
        </Link>
      </div>
    );
  }
}

export default Register;
