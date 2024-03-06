import {useContext}from 'react';
import login from "../../assets/images/login/login.svg";
import { Link } from 'react-router-dom';
import { AuthContext } from './../../Provider/AuthProvider';
const Login = () => {
    const {signIn}=useContext(AuthContext)
    const inputSubmit=e=>{
         e.preventDefault();
         const form= e.target;
         const email=form.email.value;
         const password=form.password.value;
         signIn(emai,password)
         .then(result=>{
               const user=result.user;
               console.log(user);
         })
         .catch(error=>console.log(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="mr-12  w-1/2">
     
      <img src={login} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
           <form onSubmit={inputSubmit}  className="card-body">
      <h1 className="text-5xl text-center font-bold">Login</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <h2>New to car doctor?<Link to='/signup'><span className='text-orange-600 font-bold'>Sign Up</span></Link></h2>
      </form>
     
    </div>
  </div>
</div>
    );
};

export default Login;