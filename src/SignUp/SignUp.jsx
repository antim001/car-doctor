import {useContext} from 'react';
import { Link } from 'react-router-dom';
import login from '../assets/images/login/login.svg'
import { AuthContext } from './../Provider/AuthProvider';

const SignUp = () => {
  const {createUser}=useContext(AuthContext);
  const handleSignUP=e=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    console.log(name,email,password);
    createUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>console.log(error))

  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
          
            <img src={login} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUP} className="card-body">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Confirm Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign UP</button>
              </div>
              <p>Already have an account?<span className='font-bold text-orange-600'><Link to='/login'>Login</Link></span></p>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default SignUp;