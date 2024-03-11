import React from 'react';

const ServiceCard = ({service}) => {
    const {img,title,price}=service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;