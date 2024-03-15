import {useContext} from 'react'
import {useLoaderData} from 'react-router-dom'
import { AuthContext } from './../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const CheckOut = () => {
    const{user}=useContext(AuthContext);
    const service=useLoaderData()
    const{title,price,img}=service
    const handleOrder=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=user?.email;
        const date=form.date.value;
        const order={
            customername:name,
            date,email,price,img
        }
        console.log(order);
        fetch('http://localhost:5000/bookings',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: "Your Order has been saved",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
            }
        })

    }
    return (
        <div>
        <h1>Booking Service:{title}</h1>
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
      <form onSubmit={handleOrder} className="card-body">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="mame" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name='date' placeholder="date" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input type="text" defaultValue={'$'+price} placeholder="password" className="input input-bordered" required />
          
        </div>
      
        </div>
        <div className="form-control mt-6">
         <input type="submit" className='btn btn-primary btn-block' value="Order Confirm" />
        </div>
      </form>
    </div>
    </div>
 
    );
};

export default CheckOut;