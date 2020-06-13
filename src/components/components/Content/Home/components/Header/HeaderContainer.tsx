import { Header } from "./Header"
import { connect } from 'react-redux';
import React from "react";
import { AppStateType } from "../../../../../store";
import { NavigationItemInfo } from "./components/NavigationItems/type";

const mapStateToProps = (state: AppStateType) => {
    const localStateHeader = state.header;
    const localStateApp = state.app; 
    return {
        title: localStateHeader.title,
        courses: localStateApp.courses.map(x => ({
            courseName: x.courseName,
            coursePathURL: x.pathURL
        })) as Array<NavigationItemInfo>
    }
};

const mapDispatchToProps = { 

}; 

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


const HeaderConstainerComponent: React.FC<Props> = ({
    title,
    courses,

}) => {
    return (<Header title={title}                    
                    courses={courses}/>);}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderConstainerComponent);