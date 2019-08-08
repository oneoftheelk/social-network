import React from 'react';
import style from './MessagesItem.module.css';
import propTypes from 'prop-types';

const MessagesItem = (props) => {
    let classNameValue = props.from === "me" ? style.MyMessage : style.FriendsMessage;

    return (
        <div className={classNameValue}>{props.message}</div>
    )
}

MessagesItem.propTypes = {
    message: propTypes.string.isRequired,
    from: propTypes.string.isRequired
}

export default MessagesItem;