import React from 'react';
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://cdn.thecrazytourist.com/wp-content/uploads/2019/02/ccimage-shutterstock_519559345.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

