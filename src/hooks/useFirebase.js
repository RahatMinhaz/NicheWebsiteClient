import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,updateProfile, signOut} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Register Method
    const registerUser = (email, password,name,history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{
            setAuthError('');
            const newUser ={email,displayName: name};
            setUser(newUser);
            saveUser(email,name,'POST')
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
    // sign in with google
    const signInUsingGoogle = (location,history) =>{
        setLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email,user.displayName,'PUT')
            setAuthError('');
            const destination = location?.state?.from || '/';
            history.replace(destination);
        }).catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setLoading(false));
    }
    // log in method
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
    // Loading spinner
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

    // log out
    const logout = () =>{
        setLoading(true);
        signOut(auth)
        .then(() =>{
            
        })
        .catch((error) =>{

        })
        .finally(() => setLoading(false));
    }

    // making admin
    useEffect(() => {
        fetch(`https://shielded-beyond-24603.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    // saving user info
    const saveUser = (email,displayName,method) =>{
        const user = {email,displayName};
        fetch('https://shielded-beyond-24603.herokuapp.com/users',{
            method: method,
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        admin,
        loading,
        authError,
        signInUsingGoogle,
        registerUser,
        loginUser,
        logout
    }
}
export default useFirebase;