import { Header } from "./Header"
import { connect } from 'react-redux';
import React from "react";
import { AppStateType } from "../../../../../store";
import { actions } from "./actions";
import { NavigationItemInfo } from "./components/NavigationItems/type";

const mapStateToProps = (state: AppStateType) => {
    const localStateHeader = state.header;
    const localStateApp = state.app; 
    return {
        title: localStateHeader.title,
        courses: localStateApp.courses.map(x => ({
            courseName: x.courseName,
            coursePathURL: x.pathURL
        })) as Array<NavigationItemInfo>,
        isOpen: localStateHeader.isOpen
    }
};

const mapDispatchToProps = { 
    toggleDropRightMenu: actions.toggleDropRightMenu
}; 

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


const HeaderConstainerComponent: React.FC<Props> = ({
    title,
    courses,
    isOpen,
    toggleDropRightMenu
}) => {
    return (<Header title={title}
                    courses={courses}
                    isOpen={isOpen}
                    toggleDropRightMenu={toggleDropRightMenu} />);
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderConstainerComponent);