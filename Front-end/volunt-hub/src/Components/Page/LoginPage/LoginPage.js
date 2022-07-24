import React from 'react';
import logo from '../../../Assets/Logo/vh_logo.png';
import google from '../../../Assets/Logo/google_logo.png';
import facebook from '../../../Assets/Logo/facebook_logo.png';
import { TextField } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useFirebase } from '../../Hooks/useFirebase';
import { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';

export const LoginPage = () => {
  // const [email, setEmail] = useState('');
  //const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  let form = location.state?.form?.pathname || '/';

  // console.log(user.uid);
  // console.log(user.displayName);

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  if (user) {
    navigate(form, { replace: true });
    console.log('login user found');
  }

  if (error) {
    console.log('login no user found');
    console.log(error.message);
  }

  const handlePasswordReset = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('email sent');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { signInWithGoogle, signInWithFacebook } = useFirebase();

  const loginFormController = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email && password) {
      console.log(signInWithEmailAndPassword(email, password));
      signInWithEmailAndPassword(email, password);
      console.log(email, password);
    }
  };

  return (
    <div className="mt-3 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container p-5">
      <div>
        <img src={logo} alt="" width="150" height="100" />
        <h4 className="m-3">Welcome to login</h4>
        <form onSubmit={loginFormController}>
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

          <div>
            <button
              type="button"
              className="btn btn-link fs-5 text-decoration-none "
              onClick={handlePasswordReset}
            >
              Forget password?
            </button>
          </div>
          <button
            type="submit"
            className="btn btn-primary mt-2 w-100 fs-5 rounded-3"
          >
            Submit
          </button>
        </form>
        {/* {errorMessage ? <p className="text-danger">{errorMessage}</p> : <></>} */}
        <div className="d-flex mt-3 mb-3">
          <hr className="w-50 ms-3 me-3" />
          <p>Or</p>
          <hr className="w-50 ms-3 me-3" />
        </div>
        <p className="fs-5">Use social login</p>
        <div className="d-flex justify-content-center">
          <img
            onClick={signInWithGoogle}
            src={google}
            alt=""
            width="50"
            height="50"
          />
          <img
            onClick={signInWithFacebook}
            src={facebook}
            alt=""
            width="80"
            height="50"
          />
        </div>

        <p className="m-3 fs-5">
          Don't have account yet?
          <span>
            <Link className="nav-link fs-5" to="/register">
              Register
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
