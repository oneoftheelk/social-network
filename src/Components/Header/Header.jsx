import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://cdn-images-1.medium.com/max/1600/1*VeM-5lsAtrrJ4jXH96h5kg.png" alt="" />
        </header>
    );
}

export default Header;