import React from 'react';
import logo from '../../../Assets/Logo/vh_logo.png';
import { TextField } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';

export const AdminPage = () => {
  // const [email, setEmail] = useState('');
  //const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  let form = location.state?.form?.pathname || '/dashboard';

  // console.log(user.uid);
  // console.log(user.displayName);

  const adminEmailRef = useRef('');
  const adminPasswordRef = useRef('');

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
    const email = adminEmailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('email sent');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const adminLoginFormController = (event) => {
    event.preventDefault();

    const email = adminEmailRef.current.value;
    const password = adminPasswordRef.current.value;

    if (email === 'shahriardipro38@gmail.com') {
      console.log(signInWithEmailAndPassword(email, password));
      signInWithEmailAndPassword(email, password);
      console.log(email, password);
    }
  };

  return (
    <div className="mt-5 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container p-5">
      <div>
        <img src={logo} alt="" width="150" height="100" />
        <h4 className="m-3">Admin</h4>
        <form onSubmit={adminLoginFormController}>
          <div className="form-group mt-4 mb-3">
            <TextField
              inputRef={adminEmailRef}
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
              inputRef={adminPasswordRef}
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
      </div>
    </div>
  );
};
