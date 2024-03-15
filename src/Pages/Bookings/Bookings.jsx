import { useContext, useEffect, useState } from 'react';
import { AuthContext } from './../../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const {user}=useContext(AuthContext);
    const [bookings,setBookings]=useState([])
  const  url=`http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>setBookings(data))
  },[])
    return (
      <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image</th>
            <th>Email</th>
            <th>price</th>
            <th>Date</th>
            
          </tr>
        </thead>
        <tbody>
         {bookings.map(booking=><BookingRow
         key={booking._id}
         booking={booking}
         >

         </BookingRow>)}
         
   </tbody>
  
       
        
      </table>
    </div>
    );
};

export default Bookings;