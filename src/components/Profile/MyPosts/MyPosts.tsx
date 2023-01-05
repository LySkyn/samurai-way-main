import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = (props: any) => {

    let postsElements = props.posts.map((p: { message: string; likesCount: number; }) => <Post message={p.message} likesCount={p.likesCount}/> )

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        let text = newPostElement.current?.value
        props.addPost(text)
    }
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

