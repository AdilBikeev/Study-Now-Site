import React from "react";
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import { yellow } from "@material-ui/core/colors";
import { Theme } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

type Props = {
    userAnswer: string,
    answer: string
};



const useStyles = makeStyles((theme: Theme) => createStyles({
    result_title: {
        fontSize: '2.5em',
        marginRight: theme.spacing(1)
    }
}));

/**
 * В щависимости от ответа пользоваетля возвращает текст с результатом теста.
 * @param userAnswer Ответ пользователя.
 * @param answer Ответ по заданной под-теме.
 */
export const ResultTitleHOC: React.FC<Props> = ({
    userAnswer,
    answer
}) => {

    const classes = useStyles();
    const iconSize = '3.5em';

    if (answer === userAnswer) {
        return (<>
            <div style={{ color: '#4BD37B'}} 
                className={classes.result_title}>Верно !</div>
            <SentimentVerySatisfiedIcon style={{ color: yellow[500], fontSize: iconSize }} />
        </>)
    } else {
        return (<>
            <div style={{ color: '#E06161' }}
                 className={classes.result_title}>Неверно</div>
            <SentimentVeryDissatisfiedIcon style={{ color: yellow[500], fontSize: iconSize }}/>
        </>)
    }
};