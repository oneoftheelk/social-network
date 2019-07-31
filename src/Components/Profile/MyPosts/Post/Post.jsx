import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={style.avatarSmall}>
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" />
                <div>{props.message} ❤{props.likeCount}</div>
            </div>
        </div>
    );
}

export default Post;