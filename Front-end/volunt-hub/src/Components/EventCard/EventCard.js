import React from 'react';

export const EventCard = ({ eventData }) => {
  const { title, description, date } = eventData;

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
      </div>
    </div>
  );
};
