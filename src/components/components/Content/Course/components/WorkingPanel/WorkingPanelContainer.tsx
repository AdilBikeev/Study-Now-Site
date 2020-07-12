import { connect } from 'react-redux';
import React from "react";
import { AppStateType } from "../../../../../store";
import { WorkingPanel } from './WorkingPanel';
import { CHECK_USER_ANSWER } from '../../actions';

const mapStateToProps = (store: AppStateType) => {
    return {
        courses: store.course.courseDescList
    }
};

/**
 * Параметры, приходящие извне
 */
type OwnPropsType = {
    courseName: string // часть URL, отражащая выбранный курс
};

const mapDispatchToProps = {
    setCompletedSubTheme: (isCompleted: boolean, coursDescIndex: number, themeCourseIndex: number, subThemeCourseIndex: number) => 
    ({ type: CHECK_USER_ANSWER, isCompleted, coursDescIndex,  themeCourseIndex, subThemeCourseIndex})
};

type Props = ReturnType<typeof mapStateToProps> & OwnPropsType & typeof mapDispatchToProps;

/**
 * Классовая-компонента, которая на основании выбранного курса отображает 
 * соответствующие ей рабочую область (список тем и заданий)
 */
class WorkingPanelContainerComponent extends React.Component<Props> {
    setCompleted(isCompleted: boolean, themeCourseIndex: number, subThemeCourseIndex: number) {
        const course = this.getCource();
        const courseIndex = this.props.courses.findIndex(x => x === course);

        this.props.setCompletedSubTheme(isCompleted, courseIndex, themeCourseIndex, subThemeCourseIndex);
    }
    getCource() {
        return this.props.courses.find(x => this.props.courseName.includes(x.courseName));
    }
    render() {
        const themesList = this.getCource()?.themesList;

        return themesList ? <WorkingPanel themesList={themesList}
                                          setCompletedSubTheme={this.setCompleted.bind(this)}/> : <div>ERROR 500</div>;
    }
}

export const WorkingPanelContainer = connect(mapStateToProps, mapDispatchToProps)(WorkingPanelContainerComponent);