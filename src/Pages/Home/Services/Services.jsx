import {useState,useEffect}from 'react';
import Card from './Card';



const Services = () => {
    const[services,setService]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[]);
    return (
       
        <div>
            <div className='text-center mt-2'>
                <h3 className='text-orange-600 text-2xl'>Service</h3>
                <h2 className='text-5xl font-bold mt-3 mb-3'>Our Service Area</h2>
                <p className='mt-3'>the majority have suffered alteration in some form, by injected 
                humour, <br />
                or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid mt-4 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                services.map(service=><Card key={service._id}
                service={service}
                >


                </Card>)
            }
            </div>
        </div>
    );
};

export default Services;