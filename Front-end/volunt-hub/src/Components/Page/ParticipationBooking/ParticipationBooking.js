import React, { useState, useEffect, useRef } from 'react';
import { Header } from '../../Header/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../../../Assets/Logo/vh_logo.png';

export const ParticipationBooking = () => {
  const { id } = useParams();
  const originalID = id.substring(1);
  console.log(typeof originalID, originalID);

  const [eventDetail, setEeventDetail] = useState([]);
  const URL = 'http://localhost:5000/EventDetails';

  useEffect(() => {
    axios.get(URL).then((res) => {
      setEeventDetail(res.data);
    });
  }, []);

  const search = (originalID, eventDetail) => {
    for (let i = 0; i < eventDetail.length; i++) {
      if (eventDetail[i]._id === originalID) {
        return eventDetail[i];
      }
    }
  };

  const singleEvent = search(originalID, eventDetail);
  console.log(singleEvent);

  console.log(eventDetail);
  const event = eventDetail.find(({ obj }) => obj === originalID);
  console.log(event);

  const nameRef = useRef('');
  const emailRef = useRef('');
  const mobileRef = useRef('');

  const participantFormController = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const number = mobileRef.current.value;
    const title = singleEvent?.title;
    const eventID = originalID;

    const participantDetail = { title, name, email, number, eventID };

    console.log(participantDetail);

    //  const eventDetail = { title, description, date, image };
  };

  return (
    <div>
      <Header />
      <h1 className="m-3">
        Participation booking for event : {singleEvent?.title}
      </h1>
      <div className="mt-5 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container p-5">
        <div>
          <img src={logo} alt="" width="120" height="80" />
          <h4 className="m-3">Participant details</h4>
          <form
            onSubmit={participantFormController}
            encType="multipart/form-data"
          >
            <div className="form-group mt-4 mb-3">
              <h5 className="d-flex justify-content-start">Name</h5>
              <input
                ref={nameRef}
                type="text"
                className="form-control mt-3  p-3 shadow"
                id="username"
                name="title"
                aria-describedby="emailHelp"
                placeholder="Name"
                required
              />
            </div>

            <div className="form-group mt-4 mb-3">
              <h5 className="d-flex justify-content-start">Email</h5>
              <input
                ref={emailRef}
                type="text"
                className="form-control mt-3  p-3 shadow"
                id="description"
                name="description"
                aria-describedby="emailHelp"
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group mt-4 mb-3">
              <h5 className="d-flex justify-content-start">Mobile </h5>
              <input
                ref={mobileRef}
                type="text"
                className="form-control mt-3  p-3 shadow"
                id="description"
                name="description"
                aria-describedby="emailHelp"
                placeholder="Mobile"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-2 w-100 fs-5 rounded-3"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
