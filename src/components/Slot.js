import React from 'react';
import { useRecoilState } from 'recoil';
import { makeStyles } from '@material-ui/core/styles';

import loadoutState from '../atoms/loadoutState';

const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: 175,
    maxWidth: 175,
    width: 'auto',
    height: 'auto',
  },
  label: {
    marginTop: 10,
    textAlign: 'center',
  },
}));

const Slot = (props) => {
  const { type, slot } = props;

  const [loadout] = useRecoilState(loadoutState);

  const classes = useStyles();

  return (
    <div className={classes.label}>
      <div>
        <img
          className={classes.image}
          src={
            loadout[type][slot].isLocked
              ? 'https://chaoshunter.herokuapp.com/img?lock.png'
              : '/img' + loadout[type][slot].item.img + '.png'
          }
          alt="Tool Slot"
        ></img>
      </div>
      <span>
        {loadout[type][slot].isLocked ? '' : loadout[type][slot].item.name}
      </span>
    </div>
  );
};

export default Slot;
