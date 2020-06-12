import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import { HomeContainer } from './components/Content/Home/HomeContainer';
import { FooterContainer } from './components/Footer/FooterContainer';
import { CourseContainer } from './components/Content/Course/CourseContainer';

export const App = () => {
  return (
    <BrowserRouter>

        <Route exact path='/Home' render={() => <HomeContainer />} />
        <Route exact path='/Course/:nameCourse?' render={() => <CourseContainer />} />
        <Route path='*'
          render={() => <div>404 NOT FOUND</div>} />

      <FooterContainer />
    </BrowserRouter>
  );
}
