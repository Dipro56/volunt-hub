import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Header } from '../../Header/Header';

export const HomePage = () => {
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
    </div>
  );
};
