import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useFirebase } from '../Hooks/useFirebase';

function AdminNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const { signOutHandle } = useFirebase();

  const showSidebar = () => setSidebar(!sidebar);

  const adminSignOut = () => {
    signOutHandle();
    console.log('admin singout');
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar justify-content-between">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="me-5">
            <button
              type="submit"
              className="btn btn-sm btn-success mt-2 w-100 fs-6 rounded-3"
              onClick={adminSignOut}
            >
              Logout
            </button>
          </div>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default AdminNavbar;
