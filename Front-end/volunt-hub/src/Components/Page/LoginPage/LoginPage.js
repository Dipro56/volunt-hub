import React from 'react';
import logo from '../../../Assets/Logo/vh_logo.png';
import google from '../../../Assets/Logo/google_logo.png';
import facebook from '../../../Assets/Logo/facebook_logo.png';
import { TextField } from '@mui/material';

export const LoginPage = () => {
  // const [email, setEmail] = useState('');

  const loginFormController = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(email, password);
  };

  return (
    <div className="mt-3 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container p-5">
      <div>
        <img src={logo} alt="" width="150" height="100" />
        <h4 className="m-3">Welcome to login</h4>
        <form onSubmit={loginFormController}>
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

          <div>
            <button
              type="button"
              className="btn btn-link fs-5 text-decoration-none "
            >
              Forget password?
            </button>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-2 w-100 fs-4 rounded-3"
          >
            Submit
          </button>
        </form>
        <div className="d-flex mt-3 mb-3">
          <hr className="w-50 ms-3 me-3" />
          <p>Or</p>
          <hr className="w-50 ms-3 me-3" />
        </div>
        <button
          type="button"
          class="btn btn-outline-dark d-flex justify-content-center align-items-center  rounded-pill w-100"
        >
          <img src={google} alt="" width="50" height="50" />
          <p className="d-flex align-items-center fs-4 mt-2 ms-2">
            Login with google
          </p>
        </button>
        <br />
        <button
          type="button"
          class="btn btn-outline-dark d-flex justify-content-center align-items-center  rounded-pill w-100"
        >
          <img src={facebook} alt="" width="80" height="50" />
          <p className="d-flex align-items-center fs-4 mt-2 ms-2">
            Login with facebook
          </p>
        </button>
        <p className="m-3 fs-5">
          Don't have account yet?
          <span>
            <button type="button" className="btn btn-link fs-5 ">
              Register
            </button>
          </span>
        </p>
      </div>
    </div>
  );
};
