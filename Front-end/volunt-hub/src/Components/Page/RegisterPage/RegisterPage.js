import React from 'react';
import logo from '../../../Assets/Logo/vh_logo.png';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useState } from 'react';
import { sendEmailVerification } from 'firebase/auth';

export const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');

  const verifyEmail = () =>
    sendEmailVerification(auth.currentUser).then(() => {
      console.log('Email verification sent');
    });

  const registrationFormController = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (
      password === confirmPassword &&
      email &&
      name &&
      password &&
      confirmPassword
    ) {
      console.log('Correct credential');
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('created user', user);
          verifyEmail();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log('Wrong credential');
      setErrorMessage('Check input fields properly');
    }

    //console.log(name, email, password, confirmPassword);
  };

  return (
    <div className="mt-5 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container p-5">
      <div>
        <img src={logo} alt="" width="150" height="100" />
        <h4 className="m-3">Please register</h4>
        <form onSubmit={registrationFormController}>
          <div className="form-group mt-4 mb-3">
            <TextField
              inputRef={nameRef}
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
              inputRef={emailRef}
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
              inputRef={passwordRef}
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
              inputRef={confirmPasswordRef}
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

        {errorMessage ? <p className="text-danger">{errorMessage}</p> : <></>}
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
