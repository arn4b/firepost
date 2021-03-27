import React, {useState, useContext} from 'react'
import './style.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Comment } from '../../components';
import { db, storage } from '../../firebase';

export default function Post({profileURL, username, id, photoURL, caption, comments}) {

    const deletePost = () => {
        var imageRef = storage.refFromURL(photoURL);

        imageRef.delete().then(function(){
            console.log("delted the post");
        }).catch(function(error) {
            console.log(   `Error ${error}`);
        });

        db.collection("posts")
        .doc(id)
        .delete()
    }
    return (
        <div className="post">
            <div className="p_header">
                <div className="p_user">
                    <img className="p_profilePic" src = {profileURL}/>
                    <p style={{marginLeft: "8px"}}>{username}</p>
                </div>
                <label htmlFor = "delete" style = {{cursor: "pointer"}}>
                    <DeleteForeverIcon style = {{fontSize: "40px"}}/>
                </label>

                <button id="delete" onClick={deletePost} style = {{display: "none"}}></button>
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
