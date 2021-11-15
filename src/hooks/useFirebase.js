import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,updateProfile, signOut} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password,name,history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            setAuthError('');
            const newUser ={email,displayName: name};
            setUser(newUser);
            updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) =>{
            });
            history.replace('/');
        })
        .catch((error) =>{
            setAuthError(error.message);
            console.log(error);
        })
        .finally(() => setLoading(false));
    }
    
    const signInUsingGoogle = (location,history) =>{
        setLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setAuthError('');
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setLoading(false));
    }
    const loginUser = (email,password, location, history) =>{
        setLoading(true);
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
        })
        .catch((error) =>{
            setAuthError(error.message);
        })
        .finally(() => setLoading(false));
    }
    
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth,(user) =>{
            if(user){
                setUser(user);
            } else {
                setUser({})
            }
            setLoading(false);
        });
        return () => unsubscribed;
    },[])

    const logout = () =>{
        setLoading(true);
        signOut(auth)
        .then(() =>{
            
        })
        .catch((error) =>{

        })
        .finally(() => setLoading(false));
    }
    return {
        user,
        loading,
        authError,
        signInUsingGoogle,
        registerUser,
        loginUser,
        logout
    }
}
export default useFirebase;