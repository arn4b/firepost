import React from 'react'
import { SignInBtn } from '../../components'
import "./style.css";

export default function CreatePost() {
    return (
        <div className="createPost">
            <SignInBtn />
            <p style = {{marginLeft:"10px"}}> to Post and Comment</p>
        </div>
    )
}
