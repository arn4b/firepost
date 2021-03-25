import React, { useContext } from 'react'
import { UserContext, UserContextProvider } from '../../contexts/user';
import { signInWithGoogle } from '../../services/auth'
import "./style.css"

export default function SignInBtn() {

    const [user, setUser] = useContext(UserContext).user;

    const signInBtnClick = async () => {
        let userBySignIn = await signInWithGoogle();

        if(userBySignIn) setUser(userBySignIn);
    };


    return (

     <div className="signInBtn" onClick = {signInBtnClick}>
        <p>Sign In <span><img className="google" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" /></span></p>
    </div> 

    );
}