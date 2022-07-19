import React from 'react';
import logo from '../../Assets/Logo/vh_logo.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light ps-lg-5 pe-lg-5 shadow">
        <div className="container-fluid">
          <div className="p-3">
            <img src={logo} alt="" width="200" height="150" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item m-3 m-3">
                <Link className="nav-link fs-4" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item m-3 m-3">
                <Link className="nav-link fs-4" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item m-3 m-3">
                <Link className="nav-link fs-4" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item m-3 m-3">
                <Link className="nav-link fs-4" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item m-3 m-3">
                <Link to="/admin">
                  {' '}
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill p-3 ps-4 pe-4 fs-5"
                  >
                    Admin
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
