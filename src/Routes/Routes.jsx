import { createBrowserRouter } from 'react-router-dom';
import Main from './../Layout/Main';
import Home from './../Pages/Home/Home/Home';
import Login from './../Login/Login';
import SignUp from './../SignUp/SignUp';
import CheckOut from './../Pages/CheckOut/CheckOut';
import Bookings from './../Pages/Bookings/Bookings';
import PrivateRoute from './PrivateRoute';



const router = createBrowserRouter([

    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path:'/' ,
           element:<Home></Home>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRoute><Bookings></Bookings>
        </PrivateRoute>
        }
   ]
    },
    
  ]);
  export default router;