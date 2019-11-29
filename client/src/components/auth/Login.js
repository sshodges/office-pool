import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/loginAction";

const Login = props => {
  // TODO import the state / fix the state on the bottom

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (errors === "Invalid Credentials") {
      setAlerts(errors, "danger");
      clearErrors();
    }
  }, [errors, isAuthenticated, props.history]);

  const onSubmit = e => {
    e.preventDefault();

    login({
      email,
      password
    });
  };

  const { email, password } = user;
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  tournament: state.tournament
});

export default connect(mapStateToProps, { getTournaments })(Login);
