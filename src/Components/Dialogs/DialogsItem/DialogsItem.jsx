import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const DialogsItem = (props) => {
    let path = `/dialogs/id${props.id}`
    return (
        <div>
            <NavLink to={path} activeClassName="active">{props.name}</NavLink>
        </div>
    )
}

DialogsItem.propTypes = {
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired
}

export default DialogsItem;