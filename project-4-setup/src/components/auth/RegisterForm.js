import React from 'react';

const RegisterForm = ({
  handleChange, handleSubmit, user, errors }) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className={errors.firstName ? 'form-group has-error' : 'form-group'}><input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          value={user.firstName}
          className="form-control"/>
        {errors.firstName && <small className="has-error">{errors.firstName}</small>}
        </div>
        <div className={errors.lastName ? 'form-group has-error' : 'form-group'}><input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={user.lastName}
          className="form-control"/>
        {errors.lastName && <small className="has-error">{errors.lastName}</small>}
        </div>
        <div className={errors.email ? 'form-group has-error' : 'form-group'}><input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
          className="form-control"/>
        {errors.email && <small className="has-error">{errors.email}</small>}
        </div>
        <div className={errors.username ? 'form-group has-error' : 'form-group'}><input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={user.username}
          className="form-control"/>
        {errors.username && <small className="has-error">{errors.username}</small>}
        </div>
        <div className={errors.image ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={user.image}
            onChange={handleChange}
          />
          {errors.image && <small className="has-error">{errors.image}</small>}
        </div>
        <div className={errors.lookalike ? 'form-group has-error' : 'form-group'}><input
          type="text"
          name="lookalike"
          placeholder="Lookalike"
          onChange={handleChange}
          value={user.lookalike}
          className="form-control"/>
        {errors.lookalike && <small className="has-error">{errors.lookalike}</small>}
        </div>
        <div className={errors.bio ? 'form-group has-error' : 'form-group'}><input
          type="text"
          name="bio"
          placeholder="bio"
          onChange={handleChange}
          value={user.bio}
          className="form-control"/>
        {errors.bio && <small className="has-error">{errors.bio}</small>}
        </div>
        <div className={errors.password ? 'form-group has-error' : 'form-group'}><input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={user.password}
          className="form-control"/>
        {errors.password && <small className="has-error">{errors.password}</small>}
        </div>
        <div className={errors.passwordConfirmation ? 'form-group has-error' : 'form-group'}><input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={user.passwordConfirmation}
          className="form-control"/>
        </div>
        <div className={errors.sex ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="sex" className="register-title">Sex</label>
          <select required
            className="form-control"
            id="sex"
            name="sex"
            value={user.sex}
            onChange={handleChange}
          >
            <option value="" disabled>Please Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          {errors.sex && <small className="has-error">{errors.sex}</small>}
        </div>
        <div className={errors.interestedIn ? 'form-group has-error' : 'form-group'}>
          <label htmlFor="interestedIn">Interested In</label>
          <select required
            className="form-control"
            id="interestedIn"
            name="interestedIn"
            value={user.interestedIn}
            onChange={handleChange}
          >
            <option value="" disabled>Please Select</option>
            <option>Female</option>
            <option>Male</option>
            <option>Both</option>
          </select>
          {errors.interestedIn && <small className="has-error">{errors.interestedIn}</small>}
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
