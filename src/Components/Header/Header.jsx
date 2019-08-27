import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src="https://cdn-images-1.medium.com/max/1600/1*VeM-5lsAtrrJ4jXH96h5kg.png" alt="" />
            <div className={style.loginBlock}>
                {props.isAuthorized ? props.login : <NavLink>Sign up</NavLink> }
            </div>
        </header>
    );
}

export default Header;