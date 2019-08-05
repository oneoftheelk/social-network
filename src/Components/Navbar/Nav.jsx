import React from 'react';
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends';
import style from './Nav.module.css';
import propTypes from 'prop-types';

const Nav = (props) => {
    let friendsElement = props.nav.friends.map( item => {
        return <Friends id={item.id} name={item.name} />
    })

    return (
        <nav className={style.nav}>
            <div>
                <NavLink to="/profile" activeClassName="active">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName="active">Dialogs</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName="active">News</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName="active">Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName="active">Settings</NavLink>
            </div>
            <div className={style.friendsNav}>
                <NavLink to="/friends" activeClassName="active">Friends</NavLink>
            </div>
            <div className={style.friends}>
                {friendsElement}
            </div>        
        </nav>
    );
}

Nav.propTypes = {
    nav: propTypes.object.isRequired
}

export default Nav;