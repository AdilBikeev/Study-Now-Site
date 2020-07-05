import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from "@material-ui/core/TextField";
import { Button } from '@material-ui/core';

const maxSize = '100%';

type Props = {
    question: string
};

const useStyles = makeStyles(createStyles({
    content: {
        width: maxSize
    },
    content_question: {
        width: maxSize,
        fontSize: '2em',
        marginBottom: '50px'
    },
    content_answer: {
        width: '17em',
        backgroundColor: '#EBEBEB',
        marginBottom: '15px',
    },
    content_buttons: {
        display: 'flex',
        flexFlow: 'row wrap',
    },
    content_buttons_button: {
        color: '#FFFFFF',
        backgroundColor: '#4BD37B',
        borderRadius: '50px',
        marginTop: 10,
        marginRight: 10,
        fontSize: '1.3em',
        '&:hover': {
            backgroundColor: '#4BD37B',
        }
    },
    button_confirm: {
        backgroundColor: '#4BD37B',
        '&:hover': {
            backgroundColor: '#4BD37B',
        }
    },
    button_showSolution: {
        backgroundColor: '#EF6767',
        '&:hover': {
            backgroundColor: '#EF6767',
        }
    }
}));

/**
 * Представление для выполнении практики по заданной под-теме.
 * @param question Вопрос по заданной под-теме.
 */
export const PracticeTabPanel: React.FC<Props> = ({
    question
}) => {
    const classes = useStyles();

    const [answer, setAnswer] = React.useState('');

    const onChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    };

    return (
        <div className={classes.content}>
            <div className={classes.content_question}>{question}</div>
            <TextField
                label="Ответ"
                multiline
                rows={1}
                variant="outlined"
                value={answer}
                onChange={onChangeAnswer}
                className={classes.content_answer}
            />
            <div className={classes.content_buttons}>
                <Button className={clsx(classes.content_buttons_button, classes.button_confirm)}
                    variant="contained">Подтвердить</Button>
                <Button className={clsx(classes.content_buttons_button, classes.button_showSolution)}
                    variant="contained">Посмотреть решение</Button>
            </div>
        </div>
    );
};