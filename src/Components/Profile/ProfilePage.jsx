import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import style from './ProfilePage.module.css';
import propTypes from 'prop-types';

const ProfilePage = () => {
    return (
        <div>
            <div>
                <img className={style.background} src="https://funkyimg.com/i/2VBgT.jpg" alt="" />
            </div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}

ProfilePage.propTypes = {
    profilePage: propTypes.object.isRequired,
    dispatch: propTypes.func.isRequired
}

export default ProfilePage;