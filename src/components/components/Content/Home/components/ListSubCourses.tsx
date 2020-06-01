import React from 'react';
import { SubCourse } from '../../../../type';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, List } from '@material-ui/core';

type Props = {
    subCourses: Array<SubCourse>
};

const useStyles = makeStyles(createStyles({
    subListNav: {
        margin: '10px'
    },
    sublistItemText: {
        fontFamily: 'Scada',
        fontSize: '1.2em'
    },
    subCourseIcon: {
        width: '3em'
    }
}));

/**
 * Список подкурсов, для отображения в блочных курсах.
 * @param subCourses список подкурсов.
 */
export const ListSubCourse: React.FC<Props> = ({
    subCourses
}) => {

    const classes = useStyles();

    return (<List className={classes.subListNav} >
        {subCourses.map(y => (<ListItem key={y.subCoursName} button>
            <ListItemIcon>
                <img src={y.icon} alt={y.subCoursName} className={classes.subCourseIcon} />
            </ListItemIcon>
            <label className={classes.sublistItemText}>{y.subCoursName}</label>

        </ListItem>)
        )}
    </List>
    );
};