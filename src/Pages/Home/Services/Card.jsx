import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({service}) => {
    const{_id,img,title,price}=service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className='px-10 pt-10 h-40'><img src={img} /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-xl text-orange-400'>price:{price}</p>
          <div className="card-actions ">
           <Link to={`/checkout/${_id}`}>
           <button className="btn btn-primary">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Card;