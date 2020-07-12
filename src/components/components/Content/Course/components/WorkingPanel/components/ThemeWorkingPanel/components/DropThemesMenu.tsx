import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { IconButton, Drawer, Divider, List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ThemesListItem } from '../../ThemesList/components/ThemesListItem';
import { ThemeCourse } from 'components/components/Content/Course/type';
import { getCountSubThemesCompleted } from '../../ThemesList/Helpers/ProgressCourseHelpers';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: "#D5EDDF",
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
        drawerListItem: {
            color: '#FFFFFF'
        },
        themesList: {
            height: '600px', 
            padding: '10px 20px',
            overflow: 'auto',
            '&::-webkit-scrollbar': {
                width: '1em'
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
                backgroundColor: '#F5F5F5'
            },
            '&::-webkit-scrollbar-thumb': {
                outline: '1px solid slategrey',
                borderRadius: '50px',
                backgroundColor: '#47CF73',
                backgroundImage: `-webkit-gradient(linear, 0 0, 0 100%,
                                  color-stop(.5, rgba(255, 255, 255, .2)),
                                          color-stop(.5, transparent), to(transparent))`
            }
        }
    })
);

type DispatchProps = {
    onThemeChange: (index: number) => void,
    toggleDropRightMenu: (isOpen: boolean) => void
};

type Props = {
    themesList: Array<ThemeCourse>,
    selectedTheme: number | undefined,
    isOpen: boolean
} & DispatchProps;

/**
 * Выпадающее меню с темами курса и ProgressBar.
 * @param themesList Список тем курса.
 * @param selectedTheme Индекс выбранной темы.
 * @param isOpen Задает значение, показывающее, открыто ли выподающее меню.
 * @param toggleDropRightMenu Событие вызывающийся при открытии/закрытии выпадающего меню.
 * @param onThemeChange Событие вызывающийся при смене выбранной.
 */
export const DropThemesMenu: React.FC<Props> = ({
    themesList,
    selectedTheme,
    isOpen,
    toggleDropRightMenu,
    onThemeChange
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
            onClose={() => toggleDropRightMenu(false)}>
            <div>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => toggleDropRightMenu(false)}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>

                <Divider />
                <List className={classes.themesList}>
                {themesList.map( (element, index) => <ThemesListItem  key={index + 1}
                                                                      numberTheme={(index + 1).toString()}
                                                                      title={element.name}
                                                                      isSelectedItem={index === selectedTheme}
                                                                      isCompleted={getCountSubThemesCompleted(element.subThemesCourse) === element.subThemesCourse.length}
                                                                      onThemeChange={onThemeChange}/>)}
                </List>
            </div>

        </Drawer>

    );
};