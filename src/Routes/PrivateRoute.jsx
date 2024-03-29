import {useContext} from 'react';
import { AuthContext } from './../Provider/AuthProvider';
import {Navigate}from 'react-router'
const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <progress className="progress "></progress>
    }
    if(user?.email){
        return children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;