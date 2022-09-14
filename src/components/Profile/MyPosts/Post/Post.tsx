import React from 'react';
import s from './Post.module.css'

type PostType = {
    message: string
    likesCount: number
}
export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src={'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg'}/>
            {props.message}
            <div>
                <button>Like {props.likesCount}</button>
                <button>Dislike</button>
            </div>
        </div>
    );
};

