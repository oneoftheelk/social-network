import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import style from './ProfilePage.module.css';
import propTypes from 'prop-types';

const ProfilePage = (props) => {
    return (
        <div>
            <div>
                <img className={style.background} src="https://funkyimg.com/i/2VBgT.jpg" alt="" />
            </div>
            <ProfileInfo />
            <MyPosts
                dispatch={props.dispatch}
                postsData={props.profilePage.posts}
                newPostCurrentText={props.profilePage.newPostCurrentText} />
        </div>
    );
}

ProfilePage.propTypes = {
    profilePage: propTypes.object.isRequired,
    dispatch: propTypes.func.isRequired
}

export default ProfilePage;