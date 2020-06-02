import { Footer } from './Footer';
import { connect } from 'react-redux';
import React from "react";
import { AppStateType } from "../../store";
import { ContactsBlock } from "./type";

const mapStateToProps = (state: AppStateType) => {
    const localStateApp = state.app;

    const localStateFooter = {
        contactsBlock: {
            title: localStateApp.contactsBlock.title,
            phoneBlock: { ...localStateApp.contactsBlock.phoneBlock },
            addressBlock: { ...localStateApp.contactsBlock.addressBlock },
            socialNets: [...localStateApp.contactsBlock.socialNets],
        } as ContactsBlock,
        copyRightText: localStateApp.copyRightText
    }

    return {
        contactsBlock: localStateFooter.contactsBlock,
        copyRightText: localStateFooter.copyRightText
    }
};

const mapDispatchToProps = {
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;


const FooterContainerComponent: React.FC<Props> = ({
    contactsBlock,
    copyRightText
}) => {
    return (<Footer contactsBlock={ contactsBlock }
        copyRightText={ copyRightText } />);
}


export const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(FooterContainerComponent);