import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { SubThemesList } from './components/SubThemesList';
import { SubThemeCourse, ThemeCourse } from '../../../../type';
import { DropThemesMenu } from './components/DropThemesMenu';
import { FullWidthTabs } from 'common/TabPanel/TabPanel';
import { PracticeTabPanel } from './components/PracticeTabPanel';

type DispatchProps = {
    onThemeChange: (index: number) => void,
    setCompletedSubTheme: (isCompleted: boolean, subThemeCourseIndex: number) => void
};

type Props = {
    subThemesList: Array<SubThemeCourse>,
    themesList: Array<ThemeCourse>,
    selectedTheme: number
} & DispatchProps;

const maxSize = '100%';

const useStyles = makeStyles(createStyles({
    themeWorkingPanel: {
        height: maxSize,
        width: maxSize,
        minHeight: '600px',
    }
}));

/**
 * Рабочая область ознакомления с темой курса
 * @param subThemesList Список подтем.
 * @param themesList Список тем курса.
 * @param selectedTheme Индекс выбранной темы.
 * @param onThemeChange Событие вызывающийся при изменении выбранной темы.
 * @param setCompletedSubTheme Метод устанавливающий задау в статус "Выполнено".
 */
export const ThemeWorkingPanel: React.FC<Props> = ({
    subThemesList,
    themesList,
    selectedTheme,
    onThemeChange,
    setCompletedSubTheme
}) => {

    const classes = useStyles();

    const [selectedSubTheme, onSubThemeChange] = useState(0); // выбранная под-тема
    const [isOpen, toggleDrawer] = useState(false);

    const [questionState, setQuestion] = React.useState(subThemesList[selectedSubTheme].question);
    const [answerState, setAnswer] = React.useState(subThemesList[selectedSubTheme].answer);
    const [solutionState, setSolution] = React.useState(subThemesList[selectedSubTheme].solution);
    const [solutionVisible, setVisible] = React.useState(false);

    const timeoutChangeVisible = 1000;

    const onChangeSolutionVisible = (isVisible: boolean, userAnswer: string) => {  
        // Если решение готовится отобразится - проверяем ответ пользователя.
        if (isVisible === true) {
            setCompletedSubTheme(answerState === userAnswer, selectedSubTheme);
        }

        setVisible(isVisible);
    };

    const onGenerateNewData = () => {
        setVisible(false);
        setTimeout(() => {
            let inputData = subThemesList[selectedSubTheme].generateInputData();
            setQuestion(inputData.question);
            setAnswer(inputData.answer);
            setSolution(inputData.solution);
        }, timeoutChangeVisible - 500);
    };

    if (selectedSubTheme >= subThemesList.length) {
        onSubThemeChange(0);
    }

    const tabItems: Array<TabItemType> = [
        { label: 'Практика' },
        { label: 'Теория' }
    ];

    const tabPanels: Array<TabPanelType> = [
        {
            component: <PracticeTabPanel question={questionState}
                answer={answerState}
                solution={solutionState}
                solutionVisible={solutionVisible}
                timeoutChangeVisible={timeoutChangeVisible}
                onGenerateNewData={onGenerateNewData}
                onChangeSolutionVisible={onChangeSolutionVisible} />
        },
        { component: <div>{subThemesList[selectedSubTheme].theory}</div> },
    ];

    return (
        <div className={classes.themeWorkingPanel}>
            <SubThemesList subThemesList={subThemesList}
                selectedSubTheme={selectedSubTheme}
                onSubThemeChange={onSubThemeChange}
                toggleDrawer={toggleDrawer} />
            <FullWidthTabs tabItems={tabItems}
                tabPanels={tabPanels} />
            <React.Fragment>
                <DropThemesMenu isOpen={isOpen}
                    toggleDropRightMenu={toggleDrawer}
                    themesList={themesList}
                    selectedTheme={selectedTheme}
                    onThemeChange={onThemeChange} />
            </React.Fragment>
        </div>
    )
};