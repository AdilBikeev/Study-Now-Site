import React from 'react';
import s from './Header.module.css';
import Navigation from './Navigation/Navigation';
import ToolBar from './ToolBar/ToolBar';

const Header = (props) => {
    return (
        <div className={s.header}>
            <label className={s.header_title}>{props.title}</label>
            <Navigation />
            <ToolBar />
        </div>
    );
};

export default Header;