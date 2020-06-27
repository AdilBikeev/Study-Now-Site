import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ProgressCours } from './components/ProgressCours';
import { List } from '@material-ui/core';
import { ThemesListItem } from './components/ThemesListItem';

type Props = {

};

const maxSize = '100%';

const useStyles = makeStyles(createStyles({
    themesListRoot: {
        minHeight: '600px',
        height: maxSize,
        width: '520px',
        maxWidth: maxSize,
        backgroundColor: '#D5EDDF',
        wordBreak: 'break-all'
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
}));

/**
 * TODO: Перенести данные в state
 */
const list = ['Задание № 16 Планиметрия. Часть 1',
'Задание № 16 Планиметрия. Часть 2','Задание № 16 Планиметрия. Часть 3','Задание № 16 Планиметрия. Часть 4','Задание № 16 Планиметрия. Часть 5','Задание № 16 Планиметрия. Часть 6'
];

/**
 * Список тем с прогрессом их изучения
 */
export const ThemesList: React.FC<Props> = () => {

    const classes = useStyles();

    return (
        <div className={classes.themesListRoot}>
            <ProgressCours />
            <List className={classes.themesList}>
                {list.map( (element, index) => <ThemesListItem  numberTheme={(index + 1).toString()}
                                                                title={element}/>)}
            </List>
        </div>
    )
};