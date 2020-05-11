import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const buttons = {
    button1 : 'Default',
    button2 :  '../stub/img/house.ico',
    button3 : 'Instagram',
    button4 : 'Disabled',
    button5 : 'Link',
  };

export default function MyButton() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained">{buttons.button2}</Button>
      <Button variant="contained" color="primary">
      </Button><Button variant="contained" color="primary">
      <a href="https://twitter.com/0GQpaPFZzkfJLzR">
        {buttons.button2}
        </a>
      </Button>
      <Button variant="contained" color="secondary">
        {buttons.button3}
      </Button>
      <Button variant="contained" disabled>
        {buttons.button4}
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        {buttons.button5}
      </Button>
    </div>
  );
}