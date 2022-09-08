import React from 'react';
import s from './Post.module.css'

export const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://static.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg'}/>
            {props.message}
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
    );
};

