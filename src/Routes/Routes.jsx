import { createBrowserRouter } from 'react-router-dom';
import Main from './../Layout/Main';
import Home from './../Pages/Home/Home/Home';
import Login from './../Login/Login';
import SignUp from './../SignUp/SignUp';



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
        }
        
   ]
    },
    
  ]);
  export default router;