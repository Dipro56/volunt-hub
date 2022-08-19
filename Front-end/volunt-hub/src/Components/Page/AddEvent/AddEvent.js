import React, { useState, useRef } from 'react';
import AdminNavbar from '../../SideBar/AdminNavbar';
import DatePicker from 'react-date-picker';
import axios from 'axios';
import logo from '../../../Assets/Logo/vh_logo.png';

export const AddEvent = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [image, setImage] = useState();

  const imageHandle = (event) => {
    event.preventDefault();
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  };

  const titleRef = useRef('');
  const descriptionRef = useRef('');

  const addEventFormController = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = `${
      dateValue.getMonth() + 1
    }/${dateValue.getDate()}/${dateValue.getFullYear()}`;

    const eventDetail = { title, description, date, image };

    axios
      .post('http://localhost:5000/CreateEvent', eventDetail)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <div className="mt-5 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container p-5 mb-5">
        <div>
          <img src={logo} alt="" width="120" height="80" />
          <h4 className="m-3">Add event</h4>
          <form onSubmit={addEventFormController} encType="multipart/form-data">
            <div className="form-group mt-4 mb-3">
              <h5 className="d-flex justify-content-start">Title</h5>
              <input
                ref={titleRef}
                type="text"
                className="form-control mt-3  p-3 shadow"
                id="username"
                name="title"
                aria-describedby="emailHelp"
                placeholder="Title"
                required
              />
            </div>

            <div className="form-group mt-4 mb-3">
              <h5 className="d-flex justify-content-start">Description</h5>
              <input
                ref={descriptionRef}
                type="text"
                className="form-control mt-3  p-3 shadow"
                id="description"
                name="description"
                aria-describedby="emailHelp"
                placeholder="Description"
                required
              />
            </div>

            <div className="form-group mt-4 mb-3">
              <h5 className="d-flex justify-content-start">Date</h5>
              <div>
                <DatePicker
                  className="p-3"
                  onChange={setDateValue}
                  value={dateValue}
                />
              </div>
            </div>

            <div className="form-group mt-4 mb-3">
              <h5 className="d-flex justify-content-start">Image</h5>
              <div>
                <input
                  type="file"
                  name="file"
                  placeholder="Upload image"
                  className="p-3 bg-white shadow"
                  onChange={imageHandle}
                ></input>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-2 w-100 fs-5 rounded-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
