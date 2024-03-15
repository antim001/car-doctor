import {useState,useEffect}from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div  className='mt-20'>
            <div className='text-center'>
            <h1 className='text-2xl text-orange-600 font-bold mb-2'>Services</h1>
            <h2 className='text-xl mb-2'>Our Service Area</h2>
            <p className='text-sm mb-4'>the majority have suffered alteration in some form, 
                by injected humour, <br />
                or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-center'>
            {
               services.map(service=><ServiceCard key={service._id}
                  service={service}
               >
                    
                </ServiceCard>)
            }
            </div>
        </div>
    );
};

export default Services;