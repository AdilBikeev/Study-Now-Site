import { Home } from './Home';
import { AppStateType } from '../../../store';
import { connect } from 'react-redux';
import React from "react";

const mapStateToProps = (state: AppStateType) => {
    const localStateApp = state.app;
    return {
        courses: localStateApp.courses,
    }
};

const mapDispatchToProps = {
    /*toggleDropRightMenu: actions.toggleDropRightMenu*/
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


const HomeConstainerComponent: React.FC<Props> = ({
    courses
}) => {

    const carouselItems = courses.map(x => ({
        title: x.courseName,
        subTitle: x.description,
        carouselIamge: x.carouselIamge
    }));

    return <Home carouselItems={carouselItems}
        courses={courses} />;
}


export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeConstainerComponent);