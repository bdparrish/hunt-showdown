import React from 'react';
import { Slider } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const lock = 'https://chaoshunter.herokuapp.com/img?lock.png';

const useStyles = makeStyles((theme) => ({
  slider: {
    gridRow: 2,
  },
}));

const HuntSlider = withStyles({
  root: {
    color: '#f00',
    width: '800%',
    height: 2,
    gridColumn: '1/10',
  },
  active: {},
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function HuntThumbComponent(props) {
  return (
    <span {...props}>
      <img src={lock} alt="Slot Locked"></img>
    </span>
  );
}

const LockSlider = (props) => {
  const { onChange } = props;

  const classes = useStyles();

  return (
    <div className={classes.toolSlider}>
      <HuntSlider
        ThumbComponent={HuntThumbComponent}
        defaultValue={4}
        step={1}
        marks
        min={0}
        max={4}
        valueLabelDisplay="auto"
        onChange={onChange}
      />
    </div>
  );
};

export default LockSlider;
