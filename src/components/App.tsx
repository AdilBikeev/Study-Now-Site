import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import s from './App.module.css';
import Header from './components/Header/Header';
import { connect } from 'react-redux';
import { Home } from './components/Content/Home/Home';

const App = (props: any) => {
  return (
    <BrowserRouter>
          <Header title={props.title} />
          <div className={s.content}>
            <Route path='/' component={Home} />
          </div>
    </BrowserRouter>
  );
}

let mapStateToProps = (state: any) => {
  return {
    title: state.appPage.title
  }
}

export const AppContainer = connect(mapStateToProps, { })(App);
