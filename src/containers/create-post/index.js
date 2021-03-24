import React, {useContext} from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user';
import "./style.css";

export default function CreatePost() {

    const [user, setuser] = useContext(UserContext).user;

    return (
        <div>

        {
            user

            ?

            <p>Hello {user.displayName}</p>

            :

            <div className="createPost">
                <SignInBtn />
                <p style = {{marginLeft:"10px"}}> to Post and Comment</p>
            </div>
        }


        </div>
    )
}
