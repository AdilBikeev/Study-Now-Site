import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Box, List, ListItem, ListItemIcon } from '@material-ui/core';
import { ContactsBlock } from './type';


const paddingLRText: string = '50px';
const iconWidth: string = '50px';

const useStyles = makeStyles(createStyles({
    root: {
        width: '100%',
        backgroundColor: '#494949',
        color: '#FFFFFF',
        paddingBottom: '1px'
    },
    contacts: {
        paddingLeft: paddingLRText,
        paddingRight: paddingLRText,
        paddingTop: '25px',
    },
    copyRightText: {
        color: '#B8B8B8',
        textAlign: 'center'
    },
    socialNetsList: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    socialNetsListItem: {
        maxWidth: iconWidth,
        maxHeight: '50px',
        marginLeft: '0px',
        marginRight: '20px',
        paddingLeft: '0px',
        paddingRight: '0px',
        borderRadius: '100%'
    }
}));

type Props = {
    contactsBlock: ContactsBlock,
    copyRightText: string
}

/**
 * Подвал страницы.
 * @param contactsBlock Блок "контакты".
 * @param copyRightText Текст для защиты прав владения сайтом.
 */
export const Footer: React.FC<Props> = ({
    contactsBlock,
    copyRightText
}) => {

    const classes = useStyles();

    return (<Box className={classes.root}>
        <Box className={classes.contacts}>
            <Typography variant='h3' >{contactsBlock.title}</Typography>
            <Typography variant='caption' >{contactsBlock.phoneBlock.title} {contactsBlock.phoneBlock.phoneNumber}</Typography><br />
            <Typography variant='caption' >{contactsBlock.addressBlock.title} {contactsBlock.addressBlock.address}</Typography>
            <List className={classes.socialNetsList}>
                {contactsBlock.socialNets?.map(x => <ListItem key={x.link}
                    className={classes.socialNetsListItem}
                    onClick={() => window.open(x.link)}
                    button>
                    <ListItemIcon>
                        <img src={x.icon} alt={x.link} />
                    </ListItemIcon>
                </ListItem>)}
            </List>
        </Box>
        <p className={classes.copyRightText}>
            <Typography variant='caption'>{copyRightText}</Typography>
        </p>
    </Box>);
};