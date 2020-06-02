import { Header } from "./Header"
import { connect } from 'react-redux';
import React from "react";
import { AppStateType } from "../../store";

const mapStateToProps = (state: AppStateType) => {
    const localStateHeader = state.header;
    const localStateApp = state.app; 
    return {
        title: localStateHeader.title,
        coursesName: localStateApp.courses.map(x => x.courseName)
    }
};

const mapDispatchToProps = { 

}; 

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


const HeaderConstainerComponent: React.FC<Props> = ({
    title,
    coursesName,
}) => {
    return (<Header title={title}
                    courses={coursesName}/>);
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderConstainerComponent);