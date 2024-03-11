import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
    <img src={person}className="w-3/4 rounded-lg shadow-2xl" />
    <img src={parts} alt="" className='max-w-60 absolute rounded-lg shadow-2xl right-10 top-1/2' />
    </div>
    <div className='w-1/2'>
      <h1 className="text-5xl font-bold text-orange-600">About us</h1>
      <p className="py-6 font-semibold">About Us
                We are qualified & of experience in this field.</p>
                <p className='text-sm'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected 
                    humour, or randomised words which don't look even slightly believable. </p>
                    <br />
                    <p className='text-sm'>the majority have suffered alteration in some form, 
                        by injected humour, or randomised words which don't look even slightly believable. </p>
      <button className="btn btn-primary mt-4">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;