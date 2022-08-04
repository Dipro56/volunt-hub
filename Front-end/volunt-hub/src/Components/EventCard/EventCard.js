import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EventCard = ({ eventData }) => {
  const { title, description, date, _id } = eventData;

  const navigate = useNavigate();

  const participationHandle = () => {
    navigate(`/events/:${_id}`, { replace: true });
    console.log('participate');
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mb-3 bg-white">
      <div class="card w-100 h-100 ">
        <div class="card-body shadow">
          <h3 class="card-title">Title: {title} </h3>
          {/* <h5 class="card-title">Type: </h5>
          <h5 class="card-title">Price: </h5> */}
          <h5>Date: {date}</h5>
          <h5>Description</h5>
          <p class="card-text">{description}</p>
          {/* <Link to={`/${id}`}>Checkout</Link> */}
        </div>
        <button
          onClick={participationHandle}
          type="button"
          class="btn btn-primary fs-5"
        >
          Participate
        </button>
      </div>
    </div>
  );
};
