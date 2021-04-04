import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  console.log(loggedIn);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
      };
    
const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
 
    const {displayName, email} = result.user;
    const signedInUser = {name: displayName, email};
    setLoggedIn(signedInUser);
    history.replace(from);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });

}


    return (
        <div className="sign-in">
            <h1>this is login page</h1>
            <button onClick={handleGoogleSignIn}>SignIn with google</button>
        </div>
    );
};

export default Login;