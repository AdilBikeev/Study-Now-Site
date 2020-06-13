import { Course } from './Course';
import { AppStateType } from '../../../store';
import { connect } from 'react-redux';
import React from "react";
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { compose } from 'redux';


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

};

/**
 * Данные, передаваемые в URL 
 */
export type PathParamsType = {
    nameCourse: string // Название копоненты курса
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & RouteComponentProps<PathParamsType>;

class CourseClassComponent extends React.Component<Props> {
    render() {
        //const classes = useStyles();
        
        const course = this.props.courses.find(x => x.pathURL.includes(this.props.match.params.nameCourse));

        if(course)
        {
            return <Course course={course}/>;
        }
        else
        {
            return <div>404 NOT FOUND</div>;
        }
    } 
};


export const CourseContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(CourseClassComponent);