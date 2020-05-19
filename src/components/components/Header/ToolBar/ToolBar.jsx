import React from 'react';
import s from './ToolBar.module.css';
import SearchBar from './SearchBar/SearchBar';
import Profile from './Profile/Profile';

const ToolBar = (props) => {
    return (
        <div className={s.block}>
            <SearchBar />
            <Profile />
        </div>
    );
};

export default ToolBar;