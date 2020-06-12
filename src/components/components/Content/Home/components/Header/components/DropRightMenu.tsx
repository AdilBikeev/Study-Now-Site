import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { IconButton, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { actions } from './../actions';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: "#494949",
            color: "white"
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-start',
        },
    })
);

type Props = {
    courses: Array<string>,
    isOpen: boolean,
    toggleDropRightMenu: any//typeof actions.toggleDropRightMenu
};

/**
 * Выпадающее справа меню.
 * @param courses Список курсов.
 * @param isOpen Задает значение, показывающее, открыто ли выподающее меню.
 */
export const DropRightMenu: React.FC<Props> = ({
    courses,
    isOpen,
    toggleDropRightMenu
}) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={isOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
            onClose={toggleDropRightMenu(false)}>
            <div>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={toggleDropRightMenu(false)}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <Divider />

                <List>
                    {courses.map((text) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                <MenuIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
            
        </Drawer>

    );
};