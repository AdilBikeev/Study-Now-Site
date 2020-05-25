import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { Home } from './components/Content/Home/Home';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => createStyles({
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F5EBEB",
  }
}));

export const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
          <HeaderContainer />
          <div className={classes.content}>
            <Route path='/' component={Home} />
          </div>
    </BrowserRouter>
  );
}
