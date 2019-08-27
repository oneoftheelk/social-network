import React from 'react';
import style from './ProfileInfo.module.css';
import { Preloader } from '../../../common/Preloader/Preloader';
import avatar from '../../../../Assets/Images/avatar.png';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={style.avatar}>
                <img src={props.profile.photos.small || avatar} alt="" />
                <div><b>{props.profile.fullName}</b></div>
            </div>
        </div>
    );
}

export default ProfileInfo;