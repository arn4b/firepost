import React, {useState, useContext} from 'react'
import { UserContext } from '../../contexts/user';
import { db } from '../../firebase';
import "./style.css";

export default function CommentInput({comments, id}) {

    const [comment, setComment] = useState("");
    const [user, setUser] = useContext(UserContext).user;
    const [commentarray, setCommentarray] = useState(comments ? comments : []);

    const addComment = () => {
        if(comment != "") {
            commentarray.push({
                comment: comment,
                username: user.email.replace("@gmail.com", "").toLowerCase(),
            })

            db.collection("posts").doc(id).update({comments: commentarray})
            .then(function(){
                setComment("");
                console.log("comment added");
            })
            .catch(function(error) {
                console.log(`Error ${error}`);
            });
        }
    }


    return (
        <div className="commentInput">
            <input className="ci_text" placeholder="Add Comment" onChange={(e) => setComment(e.target.value)}>

            </input>

            <button className='ci_b' onClick={addComment}>Post</button>
        </div>
    )
}
