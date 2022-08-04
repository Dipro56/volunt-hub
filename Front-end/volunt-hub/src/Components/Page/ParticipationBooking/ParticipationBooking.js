import React from 'react';
import { Header } from '../../Header/Header';
import { useParams } from 'react-router-dom';

export const ParticipationBooking = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <h1 className="m-3">Participation booking for event : {id}</h1>
    </div>
  );
};
