import { createContext, useState,useEffect } from 'react';
import { getAuth ,createUserWithEmailAndPassword,onAuthStateChanged,signOut} from "firebase/auth";
import { app } from './../firebase/firebase.config';

export const AuthContext = createContext(); // Corrected typo

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Initialized with false
    const createUser=(email,password)=>{
        setLoading(true)
         return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
           setUser(currentUser);
           console.log('current user',currentUser);
           setLoading(false)
        });
        return ()=>{
            return unsubscribe;
        }
    },[])
    const signIn=(email,password)=>{
         setLoading(true);
         return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
