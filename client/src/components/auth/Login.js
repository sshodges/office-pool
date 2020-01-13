import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/authAction";

const Login = ({auth: { user, isAuthenticated, errors }}) => {
  // TODO import the state / fix the state on the bottom
  const [alert, setAlerts] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (isAuthenticated) {
      // props.history.push("/");
    }

    if (errors === "Invalid Credentials") {
      setAlerts(errors, "danger");
      // clearErrors();
    }
  }, [errors, isAuthenticated, user]);

  const handleSubmit = async () => {

    const test = login({
      email,
      password
    });
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          className="btn btn-primary btn-block"
        >Login</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Login);
