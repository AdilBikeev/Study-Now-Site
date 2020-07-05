import { FilterList } from "./FilterList"
import { connect } from 'react-redux';
import React from "react";
import { AppStateType } from "../../../../../../../store";

const mapStateToProps = (store: AppStateType) => {
    return {
        filterListForCourse: store.course.courseDescList 
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
 * соответствующие ей фильтры
 */
class FilterListContainerComponent extends React.Component<Props> {
    render() {
 
        const filterList = this.props.filterListForCourse.find(x => this.props.courseName.includes(x.courseName))?.filterList;

        return filterList ? <FilterList filterList={filterList}/> : <></>;
    }
}


export const FilterListContainer = connect(mapStateToProps, mapDispatchToProps)(FilterListContainerComponent);