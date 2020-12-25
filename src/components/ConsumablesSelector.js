import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRecoilState } from 'recoil';

import { loadoutState } from '../atoms';

import Slot from './Slot';
import LockSlider from './LockSlider';
import ConsumablesSelectorModal from './ConsumablesSelectorModal';

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
    height: '27vh',
    display: 'grid',
    gridTemplateColumns: '10% 10% 10% 10% 10% 10% 10% 10% 10% 10%',
    gridTemplateRows: '70% 30%',
  },
  one: {
    gridColumn: '1/3',
    margin: 'auto',
  },
  two: {
    gridColumn: '3/5',
    margin: 'auto',
  },
  three: {
    gridColumn: '5/7',
    margin: 'auto',
  },
  four: {
    gridColumn: '7/9',
    margin: 'auto',
  },
  selector: {
    gridColumn: '10',
    margin: 'auto',
  },
}));

const ConsumablesSelector = () => {
  const [openModal, setOpenModal] = useState(false);

  const [loadout, setLoadout] = useRecoilState(loadoutState);

  const classes = useStyles();

  const handleOpenConsumablesSelector = () => {
    setOpenModal(true);
  };

  const handleLockSliderChange = (event, value) => {
    let updateLoadout;

    switch (value) {
      case 0:
        updateLoadout = {
          consumables: {
            one: { item: loadout.consumables.one.item, isLocked: true },
            two: { item: loadout.consumables.two.item, isLocked: true },
            three: { item: loadout.consumables.three.item, isLocked: true },
            four: { item: loadout.consumables.four.item, isLocked: true },
          },
        };
        break;
      case 1:
        updateLoadout = {
          consumables: {
            one: { item: loadout.consumables.one.item, isLocked: false },
            two: { item: loadout.consumables.two.item, isLocked: true },
            three: { item: loadout.consumables.three.item, isLocked: true },
            four: { item: loadout.consumables.four.item, isLocked: true },
          },
        };
        break;
      case 2:
        updateLoadout = {
          consumables: {
            one: { item: loadout.consumables.one.item, isLocked: false },
            two: { item: loadout.consumables.two.item, isLocked: false },
            three: { item: loadout.consumables.three.item, isLocked: true },
            four: { item: loadout.consumables.four.item, isLocked: true },
          },
        };
        break;
      case 3:
        updateLoadout = {
          consumables: {
            one: { item: loadout.consumables.one.item, isLocked: false },
            two: { item: loadout.consumables.two.item, isLocked: false },
            three: { item: loadout.consumables.three.item, isLocked: false },
            four: { item: loadout.consumables.four.item, isLocked: true },
          },
        };
        break;
      default:
        updateLoadout = {
          consumables: {
            one: { item: loadout.consumables.one.item, isLocked: false },
            two: { item: loadout.consumables.two.item, isLocked: false },
            three: { item: loadout.consumables.three.item, isLocked: false },
            four: { item: loadout.consumables.four.item, isLocked: false },
          },
        };
        break;
    }

    const prevState = Object.assign({}, loadout);

    const newLoadout = Object.assign(prevState, updateLoadout);

    setLoadout(newLoadout);
  };

  return (
    <div className={classes.gridContainer}>
      <div className={classes.one}>
        <Slot type="consumables" slot="one" />
      </div>
      <div className={classes.two}>
        <Slot type="consumables" slot="two" />
      </div>
      <div className={classes.three}>
        <Slot type="consumables" slot="three" />
      </div>
      <div className={classes.four}>
        <Slot type="consumables" slot="four" />
      </div>
      <div className={classes.selector}>
        <button
          className={classes.settingsWheel}
          type="button"
          onClick={handleOpenConsumablesSelector}
        >
          <img
            className={classes.settingsWheelImage}
            src="/img/settings_wheel.png"
            alt="Tool Selector Modal"
          ></img>
        </button>
      </div>
      <LockSlider onChange={handleLockSliderChange} />
      <ConsumablesSelectorModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default ConsumablesSelector;
