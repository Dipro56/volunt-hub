import React from 'react';
import logo from '../../../Assets/Logo/vh_logo.png';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  const registrationFormController = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    console.log(name, email, password, confirmPassword);
  };

  return (
    <div className="mt-3 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container p-5">
      <div>
        <img src={logo} alt="" width="150" height="100" />
        <h4 className="m-3">Please register</h4>
        <form onSubmit={registrationFormController}>
          <div className="form-group mt-4 mb-3">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              type="text"
              className="form-control shadow w-100"
              name="name"
              required
            />
          </div>

          <div className="form-group mt-4 mb-3">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="text"
              className="form-control shadow w-100"
              name="email"
              required
            />
          </div>

          <div className="form-group mt-4 mb-3">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className="form-control shadow w-100"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="form-group mt-4 mb-3">
            <TextField
              id="outlined-basic"
              label="Confirm password"
              variant="outlined"
              className="form-control shadow w-100"
              name="confirmpassword"
              type="password"
              placeholder="Confirm password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-2 w-100 fs-5 rounded-3"
          >
            Register
          </button>
        </form>
        <div className="d-flex mt-3 mb-3">
          <hr className="w-50 ms-3 me-3" />
          <p>Or</p>
          <hr className="w-50 ms-3 me-3" />
        </div>
        <p className="m-3 fs-5">
          Already have an account?
          <span>
            <Link className="nav-link fs-5" to="/login">
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
