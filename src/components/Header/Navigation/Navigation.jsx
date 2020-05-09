import React from "react";
import s from "./Navigation.module.css";

const Navigation = () => {
    return (
        <div className={s.navList}>
            <div className={s.item}>Школа</div>
            <div className={s.item}>Университет</div>
            <div className={s.item}>IT</div>
        </div>
    );
};

export default Navigation;