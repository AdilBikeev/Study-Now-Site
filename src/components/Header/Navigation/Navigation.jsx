import React from "react";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.navList}>
            <NavLink to='/School' className={s.item}>Школа</NavLink>
            <NavLink to='/University' className={s.item}>Университет</NavLink>
            <NavLink to='/IT' className={s.item}>IT</NavLink>
        </nav>
    );
};

export default Navigation;