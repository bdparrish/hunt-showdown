import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import WeaponSlot from './WeaponSlot';
import WeaponSelectorModal from './WeaponSelectorModal';

const useStyles = makeStyles((theme) => ({
  settingsWheel: {
    margin: 0,
    padding: 0,
    border: 'none',
    gridRow: 1,
    gridColumn: 10,
    cursor: 'pointer',
    height: 30,
    width: 30,
  },
  settingsWheelImage: {
    height: 30,
    width: 30,
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '10% 10% 10% 10% 10% 10% 10% 10% 10% 10%',
  },
  primarySlot: {
    gridColumn: '1/5',
    margin: 'auto',
  },
  secondarySlot: {
    gridColumn: '5/10',
    margin: 'auto',
  },
  selector: {
    gridColumn: '10',
    margin: 'auto',
  },
}));

const WeaponSelector = () => {
  const [openModal, setOpenModal] = useState(false);

  const classes = useStyles();

  const handleOpenWeaponSelector = () => {
    setOpenModal(true);
  };

  return (
    <div className={classes.gridContainer}>
      <div className={classes.primarySlot}>
        <WeaponSlot slot="primary" />
      </div>
      <div className={classes.secondarySlot}>
        <WeaponSlot slot="secondary" />
      </div>
      <div className={classes.selector}>
        <button
          className={classes.settingsWheel}
          type="button"
          onClick={handleOpenWeaponSelector}
        >
          <img
            className={classes.settingsWheelImage}
            src="/img/settings_wheel.png"
            alt="Weapon Selector Modal"
          ></img>
        </button>
      </div>
      <WeaponSelectorModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default WeaponSelector;
