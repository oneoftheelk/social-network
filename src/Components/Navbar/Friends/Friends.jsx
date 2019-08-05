import React from 'react';
import style from './Friends.module.css';
import propTypes from 'prop-types';

const Friends = (props) => {
    return (
        <div className={style.friendsItem}>
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="friends" />
            <div>{props.name}</div>
        </div>
    )
}

Friends.propTypes = {
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired
}

export default Friends;