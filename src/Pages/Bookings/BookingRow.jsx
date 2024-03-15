import React from 'react';

const BookingRow = ({ booking }) => {
    const {email,date,price,img}=booking
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                           {img && <img src={img} alt="Avatar" />} 
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{booking.clientName}</div>
                        <div className="text-sm opacity-50">{booking.location}</div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                <span className="badge badge-ghost badge-sm"></span>
            </td>
            
            <td>{price}</td>
            <td>{date}</td>
            
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;
