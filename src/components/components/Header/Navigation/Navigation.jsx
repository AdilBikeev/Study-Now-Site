import React from "react";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={s.navList}>
            <NavLink to='/#' className={s.item}>Школа</NavLink>
            <NavLink to='/#' className={s.item}>Университет</NavLink>
            <NavLink to='/#' className={s.item}>IT</NavLink>
        </nav>
    );
};

export default Navigation;