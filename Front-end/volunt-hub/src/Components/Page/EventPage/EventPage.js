import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { EventCard } from '../../EventCard/EventCard';
import { Header } from '../../Header/Header';

export const EventPage = () => {
  const [eventDetail, setEeventDetail] = useState([]);
  const URL = 'http://localhost:5000/EventDetails';

  useEffect(() => {
    axios.get(URL).then((res) => {
      setEeventDetail(res.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <h1>Totlal event {eventDetail.length} </h1>
      <div className="d-flex justify-content-center mb-5">
        <div className="container row ">
          {eventDetail.map((data) => (
            <EventCard key={data.id} eventData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
