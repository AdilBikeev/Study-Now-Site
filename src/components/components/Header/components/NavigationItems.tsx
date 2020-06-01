import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Hidden, Box } from '@material-ui/core';

const generalProperties = {
    width: '13vw',
    borderRadius: '50px',
}

const useStyles = makeStyles(createStyles({
    tabItems: {
        flexGrow: 1,
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex' 
    },
    boxBtns: {
        width: generalProperties.width,
        border: '3px solid #000000',
        borderRadius: generalProperties.borderRadius,
        backgroundColor: '#72FFA4',
        margin: 'auto 30px',
    },
    boxBtnItems: {
        width: generalProperties.width,
        borderRadius: generalProperties.borderRadius,
        padding: '10px',
        fontFamily: 'Vollkorn',
        fontWeight: 'bold'
    }
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
        <Box className={classes.tabItems}>
            <Hidden smDown>
                {courses.map(x => (
                    <Box key={x}
                         className={classes.boxBtns}>
                        <Button
                            className={classes.boxBtnItems}
                            onClick={() => { }}>{x}</Button>
                    </Box>
                ))}
            </Hidden>
        </Box >
    )
}