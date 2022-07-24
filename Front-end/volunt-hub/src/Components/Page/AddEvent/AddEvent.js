import React, { useState, useRef } from 'react';
import AdminNavbar from '../../SideBar/AdminNavbar';
import { TextField } from '@mui/material';
import DatePicker from 'react-date-picker';

export const AddEvent = () => {
  const [dateValue, setDateValue] = useState(new Date());

  const titleRef = useRef('');
  const descriptionRef = useRef('');

  const addEventFormController = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = `${
      dateValue.getMonth() + 1
    }/${dateValue.getDate()}/${dateValue.getFullYear()}`;

    console.log(title, description, date);
  };

  return (
    <div>
      <AdminNavbar />
      <h1>Add event</h1>
      <div className="mt-5 col-lg-4 col-md-8 col-sm-12 bg-white shadow justify-content-center align-items-center container p-5">
        <div>
          {/* <img src={logo} alt="" width="150" height="100" /> */}
          <h4 className="m-3">Add event</h4>
          <form onSubmit={addEventFormController}>
            <div className="form-group mt-4 mb-3">
              <h5 className="d-flex justify-content-start">Title</h5>
              <TextField
                inputRef={titleRef}
                id="outlined-basic"
                label="Title"
                variant="outlined"
                type="text"
                className="form-control shadow w-100"
                name="title"
                required
              />
            </div>

            <div className="form-group mt-4 mb-3">
              <h5 className="d-flex justify-content-start">Description</h5>
              <TextField
                inputRef={descriptionRef}
                id="outlined-basic"
                label="Description"
                variant="outlined"
                className="form-control shadow w-100"
                name="description"
                type="text"
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