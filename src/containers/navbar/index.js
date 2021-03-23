import React, { useContext } from 'react'
import "./style.css"
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user'

export default function Navbar() {

    const [user, setUser] = useContext(UserContext).user;
    
    return (
        <div className="navbar">
            <p>FirePost 🔥</p>

            {

            user 
            
            ?
            
            <div className="user-info">
                <p>Welcome <span className="userName">{user.displayName}</span></p>
                <img className="navbar-img" src={user.photoURL} /> 
            </div>

            :

            <SignInBtn />

            }

            
        </div>
    )
}
