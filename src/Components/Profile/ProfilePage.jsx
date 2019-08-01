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
            <MyPosts
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                postsData={props.profilePage.posts}
                newPostCurrentText={props.profilePage.newPostCurrentText} />
        </div>
    );
}

export default ProfilePage;