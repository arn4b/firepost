import React, {useContext, useState} from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user';
import makeId from '../../helper/functions'
import "./style.css";

import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { MarkunreadOutlined } from '@material-ui/icons';
import { db, storage } from '../../firebase';

import firebase from 'firebase';

export default function CreatePost() {

    const [user, setUser] = useContext(UserContext).user;
    const [caption, setCaption] = useState("");

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0]);

            var selectedImageSrc = URL.createObjectURL(e.target.files[0]);

            var imagePreview = document.getElementById("image-preview");

            imagePreview.src = selectedImageSrc;

            imagePreview.style.display = "block";
        }
    };

    const handleUpload = () => { 
        if(image) {
            var imageName = makeId(10);
            const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);

            uploadTask.on("state_changed", (snapshot) => {
                const progress = Math.round((snapshot.byesTransferred/snapshot.totalBytes) * 100);

            }, (error) => {
                console.log(error);
            }, () => {
                storage.ref("images").child(`${imageName}.jpg`).getDownloadURL().then((imageURL) => {
                    db.collection("posts").add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        photoURL: imageURL,
                        username: user.email.replace("@gmail.com", ""),
                        profileURL: user.photoURL
                    })
                })
            });
        }
    };
    return (
        <div className="createPost">

        {
            user

            ?

            <div className="cp_main">
                <p>Create Post</p>

                <div className="cp_center">
                    <textarea className="cp_text" rows="3" placeholder="Enter Caption Here" value = {caption} onChange={(e) => setCaption(e.target.value) }>

                    </textarea>

                    <div className="cp_imgpreview">
                        <img id="image-preview" />
                    </div>
                </div>

                <div className="cp_bottom">
                    <label htmlFor = "fileInput">
                        <AddAPhotoIcon/>
                    </label>
                    <input id="fileInput" type="file" accept="image/*" onChange={handleChange}></input>
                    <button className="uploadBtn" onClick={handleUpload} style = {{color: caption ? "#000" : "lightgray"}}>Upload</button>
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
