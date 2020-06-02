import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { HeaderContainer } from './components/Header/HeaderContainer';
import { createStyles, makeStyles } from '@material-ui/core';
import { HomeContainer } from './components/Content/Home/HomeContainer';
import { FooterContainer } from './components/Footer/FooterContainer';

const useStyles = makeStyles(() => createStyles({
  content: {
    width: "100%",
  }
}));

export const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
          <HeaderContainer />
          <div className={classes.content}>
            <Route path='/' component={HomeContainer} />
          </div>
          <FooterContainer />
    </BrowserRouter>
  );
}
