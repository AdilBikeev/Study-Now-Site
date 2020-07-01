import { connect } from 'react-redux';
import React from "react";
import { AppStateType } from "../../../../../store";
import { WorkingPanel } from './WorkingPanel';

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
};

type Props = ReturnType<typeof mapStateToProps> & OwnPropsType & typeof mapDispatchToProps;

/**
 * Классовая-компонента, которая на основании выбранного курса отображает 
 * соответствующие ей рабочую область (список тем и заданий)
 */
class WorkingPanelContainerComponent extends React.Component<Props> {
    render() {
        
        const course = this.props.courses.find(x => this.props.courseName.includes(x.courseName));
        const themesList = course?.themesList;

        return themesList ? <WorkingPanel themesList={themesList}/> : <div>ERROR 500</div>;
    }
}

export const WorkingPanelContainer = connect(mapStateToProps, mapDispatchToProps)(WorkingPanelContainerComponent);