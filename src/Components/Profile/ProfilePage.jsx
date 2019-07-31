import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';
import style from './ProfilePage.module.css';

const ProfilePage = (props) => {
    return (
        <div>
            <div>
                <img className={style.background} src="https://funkyimg.com/i/2VBgT.jpg" alt="" />
            </div>
            <ProfileInfo />
            <MyPosts postsData={props.state.posts} />
        </div>
    );
}

export default ProfilePage;