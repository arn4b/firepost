import React, { useContext } from 'react'
import "./style.css"
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user'

export default function Navbar() {

    const [user, setUser] = useContext(UserContext).user;
    
    return (
        <div className="navbar">
            <h2>FirePost 🔥</h2>

            {

            user 
            
            ?
            
            <div className="user-info">
            <p  className="welcome">Welcome <span className="userName">{user.displayName}</span></p>
                <img className="navbar-img" src={user.photoURL} /> 
            </div>

            :

            <SignInBtn />

            }

            
        </div>
    )
}
