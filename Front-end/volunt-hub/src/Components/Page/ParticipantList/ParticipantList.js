import React from 'react';
import AdminNavbar from '../../SideBar/AdminNavbar';
import { ParticipantTable } from './ParticipantData';

export const ParticipantList = () => {
  return (
    <div>
      <AdminNavbar />
      <h4 className="m-4">Participant List </h4>
      <ParticipantTable />
    </div>
  );
};
