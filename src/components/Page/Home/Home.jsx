import React from 'react';
import s from './Home.module.css';
import Header from '../../Header/Header';

const Home = () => {
    return (
        <div id="home" className={s.home}>
            <Header title="Study-Now"/>
        </div>
    )
}

export default Home;