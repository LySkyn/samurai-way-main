import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props: { state: { posts: any[]; }; }) => {

    return (
        <div >
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    );
};

