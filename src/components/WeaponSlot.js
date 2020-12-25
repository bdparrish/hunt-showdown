import React from 'react';
import { useRecoilState } from 'recoil';
import { makeStyles } from '@material-ui/core/styles';

import loadoutState from '../atoms/loadoutState';

const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: 275,
    maxWidth: 275,
    width: 'auto',
    height: 'auto',
  },
  label: {
    textAlign: 'center',
  },
}));

const WeaponSlot = (props) => {
  const { slot } = props;

  const [loadout] = useRecoilState(loadoutState);

  const classes = useStyles();

  return (
    <div className={classes.label}>
      <div>
        <img
          className={classes.image}
          src={'/img' + loadout[slot].img + '.png'}
          alt="Weapon Slot"
        ></img>
      </div>
      <span>{loadout[slot].name}</span>
    </div>
  );
};

export default WeaponSlot;
