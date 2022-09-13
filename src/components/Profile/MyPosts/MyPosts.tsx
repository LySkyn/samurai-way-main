import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea> </textarea>
                </div>
                <div>
                    <button> Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi! How are you?'/>
                <Post message="It's my first post"/>
            </div>
        </div>
    );
};

