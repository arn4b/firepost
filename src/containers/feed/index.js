import React, { useState, useEffect } from 'react'
import {Post} from '..'
import { db } from '../../firebase'
import "./style.css"

export default function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id:doc.id, post: doc.data()
            })))
        })
    }, [posts])

    return (
        <div className="feed">

            {
                posts.map(({id, post}) => {
                    return (<Post 
                    key={id}
                    id = {id}
                    profileURL = {post.profileURL}
                    username = {post.username}
                    photoURL = {post.photoURL}
                    caption = {post.caption}
                    />);
                })
            }
        </div>
    )
}
