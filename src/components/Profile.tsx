import React from 'react';
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://cdn.thecrazytourist.com/wp-content/uploads/2019/02/ccimage-shutterstock_519559345.jpg'/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Post
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

