import React, {useState} from 'react'
import './FeedSender.css';
import {Avatar} from '@material-ui/core';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from '../StateProvider';
import db from '../firebase';
import firebase from 'firebase';

function FeedSender() {

    const [{user}, dispatch] = useStateValue()
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })
        setInput('');
        setImageUrl('');
    }
    return (
        <div className="feedSender">
            <div className="feedSender__top">
                <Avatar src={user.photoURL} />

                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="feedSender__input"
                        placeholder={`What's on your mind, ${user.displayName}?`}
                    />
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="image URL (Optional)" />

                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>

                </form>
            </div>

            <div className="feedSender__bottom">
                <div className="feedSender__option">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>

                <div className="feedSender__option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photo / Video</h3>
                </div>

                <div className="feedSender__option">
                    <InsertEmoticonIcon style={{color: 'orange'}} />
                    <h3>Feeling / Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default FeedSender
