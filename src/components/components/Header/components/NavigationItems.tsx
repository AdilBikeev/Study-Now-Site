import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(createStyles({
    tabItems: {
        flexGrow: 1,
        textAlign: "center"
    },
})
);

type Props = {
    courses: Array<string>
};

/**
 * Навигационные кнопки
 * @param courses список курсов
 */
export const NavigationItems: React.FC<Props> = ({
    courses
}) => {
    const classes = useStyles();

    return (
        <div className={classes.tabItems}>
            <Hidden xsDown>
                {courses.map(x => (
                    <Button key={x} onClick={() => { }}>{x}</Button>
                ))}
            </Hidden>
        </div>
    )
}