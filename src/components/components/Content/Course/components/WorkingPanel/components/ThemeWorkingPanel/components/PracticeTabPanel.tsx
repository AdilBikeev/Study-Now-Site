import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from "@material-ui/core/TextField";
import { Button, Theme } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import { ResultTitleHOC } from './hoc/ResultTitleHOC';

const maxSize = '100%';

type DispatchProps = {
    onGenerateNewData: () => void,
    onChangeSolutionVisible: (isVisible: boolean, userAnswer: string) => void
};

type Props = {
    question: string,
    answer: string,
    solution: string,
    solutionVisible: boolean,
    timeoutChangeVisible: number
} & DispatchProps;

const useStyles = makeStyles((theme: Theme) => createStyles({
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
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: theme.spacing(2),
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
    },
    button_tryAgain: {
        margin: '0 auto',
        backgroundColor: '#000',
        '&:hover': {
            backgroundColor: '#000',
        }
    },
    content_result: {
        display: 'flex',
        flexFlow: 'row wrap',
        margin: theme.spacing(1),
        padding: theme.spacing(1),
    },
    content_solution_root: {
        margin: theme.spacing(2),
        padding: theme.spacing(1),
        border: '2px solid black',
        borderRadius: 12,
        fontWeight: "bold"
    },
    content_solution: {
        marginBottom: theme.spacing(4),
    }
}));

/**
 * Представление для выполнении практики по заданной под-теме.
 * @param question Вопрос по заданной под-теме.
 * @param answer Ответ по заданной под-теме.
 * @param solution Решение по заданной под-теме.
 * @param solutionVisible Задаем видимость решения задачи.
 * @param timeoutChangeVisible Время смены видимости решения.
 * @param generateInputData Метод для автогенерации под-темы.
 */
export const PracticeTabPanel: React.FC<Props> = ({
    question,
    answer,
    solution,
    solutionVisible,
    timeoutChangeVisible,
    onGenerateNewData,
    onChangeSolutionVisible
}) => {
    const classes = useStyles();

    const [userAnswer, setUserAnswer] = React.useState('');

    const toggleVisibleSolution = () => {
        onChangeSolutionVisible(!solutionVisible, userAnswer);
    };

    const onChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div className={classes.content}>
            <div className={classes.content_question}>{question}</div>

            <TextField
                label="Ответ"
                multiline
                rows={1}
                variant="outlined"
                value={userAnswer}
                onChange={onChangeAnswer}
                className={classes.content_answer}
            />

            <div className={classes.content_buttons}>
                <Button className={clsx(classes.content_buttons_button, classes.button_confirm)}
                    variant="contained"
                    disabled={solutionVisible}
                    onClick={() => onChangeSolutionVisible(true, userAnswer)}>Подтвердить</Button>
                <Button className={clsx(classes.content_buttons_button, classes.button_showSolution)}
                    variant="contained"
                    onClick={toggleVisibleSolution}>{solutionVisible ? 'Скрыть решение' : 'Посмотреть решение'}</Button>
            </div>

            <Grow
                in={solutionVisible}
                style={{ transformOrigin: '0 0 0' }}
                {...(solutionVisible ? { timeout: timeoutChangeVisible } : {})}
            >
                <div style={{ marginTop: 70, display: 'flex', flexDirection: "column" }}>
                    <div className={classes.content_result}>
                        <ResultTitleHOC userAnswer={userAnswer}
                            answer={answer} />
                    </div>
                    <Paper elevation={4} className={classes.content_solution_root}>
                        <div className={classes.content_solution}>{solution}</div>
                        <div>Ответ: {answer}</div>
                    </Paper>

                    <Button className={clsx(classes.content_buttons_button, classes.button_tryAgain)}
                        variant="contained"
                        onClick={onGenerateNewData}>{'Попробовать ещё'}</Button>
                </div>
            </Grow>
        </div>
    );
};