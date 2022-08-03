import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { EventCardAdmin } from '../../EventCard/EventCardAdmin';
import AdminNavbar from '../../SideBar/AdminNavbar';

export const EventPageAdmin = () => {
  const [eventDetail, setEeventDetail] = useState([]);
  const URL = 'http://localhost:5000/EventDetails';

  useEffect(() => {
    axios.get(URL).then((res) => {
      setEeventDetail(res.data);
    });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <h1>Totlal event {eventDetail.length} </h1>
      <div className="d-flex justify-content-center mb-5">
        <div className="container row ">
          {eventDetail.map((data) => (
            <EventCardAdmin key={data.id} eventData={data} />
          ))}
        </div>
      </div>
    </div>
  );
};
