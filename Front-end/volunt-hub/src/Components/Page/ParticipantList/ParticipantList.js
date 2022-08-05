import React from 'react';
import { useParticipantList } from '../../Hooks/useParticipantList';
import AdminNavbar from '../../SideBar/AdminNavbar';

export const ParticipantList = () => {
  const { participantList } = useParticipantList();

  return (
    <div>
      <AdminNavbar />
      <h1>Participant list {participantList.length} </h1>
    </div>
  );
};
