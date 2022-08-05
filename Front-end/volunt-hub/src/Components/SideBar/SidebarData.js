import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';

export const SidebarData = [
  {
    title: 'Event List',
    path: '/eventList',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
  },
  {
    title: 'Add event',
    path: '/addEvent',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
  },

  {
    title: 'Participant list',
    path: '/list',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text',
  },

  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text',
  },

  {
    title: 'Logout',
    path: '/login',
    icon: <IoIcons5.IoArrowBackOutline />,
    cName: 'nav-text',
  },
];
