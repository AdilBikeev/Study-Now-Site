import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { ThemeCourse } from '../../../../../../type';
import { getCountCompletedThemes } from '../../Helpers/ProgressCourseHelpers';
import { LinearProgress, withStyles, Theme } from '@material-ui/core';
import { getProgressIcon } from 'utils/progressHelper';

type Props = {
  themesList: Array<ThemeCourse>
};

const useStyles = (levelBg: string) => makeStyles(createStyles({
  progressCours: {
    display: 'flex',
    height: '90px',
    backgroundColor: '#EF6767',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressIcon: {
    width: 118,
    height: 90
  },
  progressStat: {
    width: '20%',
    fontSize: '1vw'
  }
}))();

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '10vw',
      height: 30,
      borderRadius: 5,
      margin: 'auto 20px'
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#72FFA4',
    },
  }),
)(LinearProgress);

/**
 * Отражает прогресс изучения курса.
 * @param themesList Список тем курса.
 */
export const ProgressCours: React.FC<Props> = ({
  themesList
}) => {

  const completedThemes = getCountCompletedThemes(themesList);
  const countThemes = themesList.length;
  const levelIcon = getProgressIcon(completedThemes, countThemes);
  const classes = useStyles(levelIcon);

  return (
    <div className={classes.progressCours}>
      <img className={classes.progressIcon} 
           src={levelIcon}
           alt={'Прогресс'}/>
      <BorderLinearProgress variant="determinate" value={(completedThemes / countThemes) * 100} />
      <div className={classes.progressStat}>{completedThemes} / {countThemes}</div>
    </div>
  )
};