import { Home } from './Home';
import { AppStateType } from '../../../store';
import { connect } from 'react-redux';
import { createStyles, makeStyles } from '@material-ui/core';
import React from "react";
import { HeaderContainer } from './components/Header/HeaderContainer';

const useStyles = makeStyles(() => createStyles({
    content: {
        width: "100%",
    }
}));


const mapStateToProps = (state: AppStateType) => {
    const localStateApp = state.app;
    return {
        courses: localStateApp.courses.map(x => ({
            ...x,
            subCourses: x.subCourses ? x.subCourses : []
        })),
    }
};

const mapDispatchToProps = {
    /*toggleDropRightMenu: actions.toggleDropRightMenu*/
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


const HomeConstainerComponent: React.FC<Props> = ({
    courses
}) => {

    const classes = useStyles();

    const carouselItems = courses.map(x => ({
        title: x.courseName,
        subTitle: x.description,
        carouselIamge: x.carouselIamge
    }));

    return (<div className={classes.content}>
        <HeaderContainer />
        <Home carouselItems={carouselItems}
            courses={courses} />

    </div>
    );
}


export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeConstainerComponent);