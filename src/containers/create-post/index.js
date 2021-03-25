import React, {useContext, useState} from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user';
import "./style.css";

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

export default function CreatePost() {

    const [user, setuser] = useContext(UserContext).user;
    const [caption, setCaption] = useState("");

    const handleChange = () => {

    }
    return (
        <div>

        {
            user

            ?

            <div className="cp_main">
                <p>Create Post</p>

                <div className="cp_center">
                    <textarea className="cp_text" rows="3" value = {caption} onChange={(e) => setCaption(e.target.value) }>

                    </textarea>
                </div>

                <div className = "cp_img">
                    
                    <label htmlFor = "fileInput">
                        <AddAPhotoIcon style = {{cursor: "pointer", fontSize: "50px"}}/>
                    </label>
                    <input id="fileInput" type="file" accept="image/*" onChange={handleChange}>

                    </input>
                </div>
            </div>

            :

            <div className="createPost">
                <SignInBtn />
                <p style = {{marginLeft:"10px"}}> to Post and Comment</p>
            </div>
        }


        </div>
    )
}
