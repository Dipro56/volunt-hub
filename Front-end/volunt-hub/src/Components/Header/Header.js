import React from 'react';
import logo from '../../Assets/Logo/vh_logo.png';
import { Link } from 'react-router-dom';
import { useFirebase } from '../Hooks/useFirebase';

export const Header = () => {
  const { user, signOutHandle } = useFirebase();

  console.log('header : ', user);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid ">
        <img src={logo} alt="" width="100" height="70" />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end me-5"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link fs-5" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link fs-5" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link fs-5" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              {user.email ? (
                <div className="fs-5 p-2 text-primary">
                  <p>{user.email}</p>
                </div>
              ) : (
                <div>
                  <p>{}</p>
                </div>
              )}
            </li>
            <li className="nav-item ">
              {user.uid ? (
                <button
                  onClick={signOutHandle}
                  className="btn btn-link text-decoration-none fs-5"
                >
                  Logout
                </button>
              ) : (
                <Link className="nav-link fs-5" to="/login">
                  Login
                </Link>
              )}
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/admin">
                {' '}
                <button
                  type="button"
                  className="btn btn-primary rounded-pill  ps-4 pe-4 fs-6"
                >
                  Admin
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
