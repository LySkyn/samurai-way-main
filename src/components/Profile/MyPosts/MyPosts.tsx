import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, How are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 10},

    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/> )

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
                {postsElements}
            </div>
        </div>
    );
};

