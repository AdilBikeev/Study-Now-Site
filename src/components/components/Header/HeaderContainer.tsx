import { Header } from "./Header"
import { connect } from 'react-redux';
import { RootState } from "../../types";
import React from "react";

const mapStateToProps = (state: RootState) => ({...state.appPage});

const mapDispatchToProps = {};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


const HeaderConstainerComponent: React.FC<Props> = ({
    title,
    cursesName
}) => {
    return (<Header title={title}
                    courses={cursesName} />);
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderConstainerComponent);