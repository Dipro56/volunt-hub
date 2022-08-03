// import axios from 'axios';
import axios from 'axios';
import React from 'react';

export const EventCardAdmin = ({ eventData }) => {
  const { title, description, date, _id } = eventData;

  const deleteEvent = () => {
    console.log(_id);
    // const URL = `http://localhost:5000/DeleteEvent/${_id}`;

    const id = { _id };

    axios
      .post('http://localhost:5000/DeleteEvent', id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios.post(URL).then((res) => {
    //   console.log(res);
    // });

    // axios
    //   .delete('https://reqres.in/api/posts/1')
    //   .then(() => console.log('delete successfull'));

    //  fetch(`http://localhost:5000/editStudent/${_id}`, {
    //    method: 'PUT', // or 'PUT'
    //    headers: {
    //      'Content-Type': 'application/json',
    //    },
    //    body: JSON.stringify(studentInfo),
    //  })
    //    .then((response) => response.json())
    //    .then((studentInfo) => {
    //      console.log('Success:', studentInfo);
    //    })
    //    .catch((error) => {
    //      console.error('Error:', error);
    //    });
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3 bg-white">
      <div class="card w-100 h-100 ">
        <div class="card-body shadow">
          <h3 class="card-title">Title: {title} </h3>
          {/* <h5 class="card-title">Type: </h5>
          <h5 class="card-title">Price: </h5> */}
          <h5>Date: {date}</h5>
          <h6>ID: {_id}</h6>
          <h5>Description</h5>
          <p class="card-text">{description}</p>
          {/* <Link to={`/${id}`}>Checkout</Link> */}
        </div>
        <button onClick={deleteEvent} type="button" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};
