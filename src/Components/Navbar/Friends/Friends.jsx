import React from 'react';
import style from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={style.friendsItem}>
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />
            <div>{props.name}</div>
        </div>
    )
}

export default Friends;