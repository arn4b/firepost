import React, {useState, useContext} from 'react'
import './style.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Comment } from '../../components';

export default function Post({profileURL, username, id, photoURL, caption, comments}) {

    return (
        <div className="post">
            <div className="p_header">
                <div className="p_user">
                    <img className="p_profilePic" src = {profileURL}/>
                    <p style={{marginLeft: "8px"}}>{username}</p>
                </div>

                <DeleteForeverIcon style = {{fontSize: "40px"}}/>
            </div>

            <div className="p_pic">
                <img className = "p_image" src = {photoURL} />
            </div>

            <div className = "caption">
                <span>
                    {username}
                </span>
                <p>{caption}</p>
            </div>

            {comments ? comments.map((comment) => (
            <Comment username = {comment.username} caption = {comment.comment}/> )) : <></>}
        </div>
    )
}
