import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({
  handleChange, handleSubmit, user }) => {
  return (
    <div className="container">
      <h1 className="register-title login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}><div className="form-group login-input"><input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={user.email}
        className="form-control"/>
      </div>
      <div className="form-group login-input">
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          className="form-control"
        />
      </div>
      <button className="btn-primary">Enter</button>
      <Link to="/register">
        <p className="no-account">No account? Register here!</p>
      </Link>
      </form>
    </div>

  );
};

export default LoginForm;
