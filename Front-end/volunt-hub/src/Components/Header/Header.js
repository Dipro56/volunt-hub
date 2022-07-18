import React from 'react';
import logo from '../../Assets/Logo/vh_logo.png';

export const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light p-3">
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
              <li className="nav-item ms-3 me-3">
                <a
                  className="nav-link active fs-3"
                  aria-current="page"
                  href="s"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-3 ms-3 me-3" href="s">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-3 ms-3 me-3" href="s">
                  Pricing
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item ms-3 me-3">
                <a
                  className="nav-link active fs-3  "
                  aria-current="page"
                  href="s"
                >
                  Admin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
