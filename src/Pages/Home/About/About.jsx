import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen  mt-5">
  <div className="hero-content flex-col lg:flex-row ">
  <div className='w-full relative flex justify-center items-center flex-wrap'>
    <img src={person} className="max-w-full rounded-lg shadow-2xl w-2/3 md:w-auto md:max-w-sm mb-4 md:mb-0" />
    <img src={parts} className="absolute max-w-full rounded-lg shadow-2xl w-1/3 right-12 top-36 md:right-auto md:top-auto lg:right-24 lg:top-36 xl:right-32 xl:top-40 border-8 border-white" />
</div>


    <div className='w-1/2 space-y-4'>
        <p className='text-orange-600 font-bold'>About us</p>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
      or randomised words which don't look even slightly believable.</p>
      <p>the majority have suffered alteration in some form, by injected humour, or randomised 
        words which don't look even slightly believable. </p>
      <button className="btn btn-primary">Get  More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;