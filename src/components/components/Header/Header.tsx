import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    flexGrow: 0
  },
});

type Props = {
  title: string;
  courses: Array<string>
};

export const Header: React.FC<Props> = ({
  title,
  courses
  }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {courses.map(x => (
        <Button onClick={() => { }}>{x}</Button>
      ))}
    </Container>
  );
}