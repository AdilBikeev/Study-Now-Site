import { Header } from "./Header"
import { connect } from 'react-redux';
import React from "react";
import { AppStateType } from "../../store";
import { actions } from "./actions";

const mapStateToProps = (state: AppStateType) => {
    const localStateHeader = state.header;
    const localStateApp = state.app; 
    return {
        title: localStateHeader.title,
        coursesName: localStateApp.courses.map(x => x.courseName),
        isOpen: localStateHeader.isOpen
    }
};

const mapDispatchToProps = { 
    toggleDropRightMenu: actions.toggleDropRightMenu
}; 

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


const HeaderConstainerComponent: React.FC<Props> = ({
    title,
    coursesName,
    isOpen,
    toggleDropRightMenu
}) => {
    return (<Header title={title}
                    courses={coursesName}
                    isOpen={isOpen}
                    toggleDropRightMenu={toggleDropRightMenu} />);
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderConstainerComponent);