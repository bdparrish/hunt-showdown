import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRecoilState } from 'recoil';

import WeaponSelector from './WeaponSelector';
import ToolsSelector from './ToolsSelector';
import ConsumablesSelector from './ConsumablesSelector';

import {
  selectedLargeWeaponsState,
  selectedMediumWeaponsState,
  selectedSmallWeaponsState,
  selectedToolsState,
  selectedConsumablesState,
  loadoutState,
} from '../atoms';

import weapon from '../data/weapon.json';
import tool from '../data/tools.json';
import consumable from '../data/consumables.json';

const useStyles = makeStyles((theme) => ({
  headerH1: {
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  headerH2: {
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  rollTheDiceContainer: {
    textAlign: 'center',
  },
  rollTheDice: {
    backgroundColor: 'red',
    border: 'none',
    color: 'white',
    marginBottom: 32,
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: 16,
    cursor: 'pointer',
  },
  gridContainer: {
    margin: '0 auto',
    width: '60%',
    height: '75vh',
    display: 'grid',
    gridTemplateRows: '33.33% 33.33% 33.33%',
  },
  weaponSelector: {
    gridRow: 1,
  },
  toolsSelector: {
    gridRow: 2,
  },
  consumablesSelector: {
    gridRow: 3,
  },
}));

const RandomLoadout = () => {
  const [selectedLargeWeaponList] = useRecoilState(selectedLargeWeaponsState);
  const [selectedMediumWeaponList] = useRecoilState(selectedMediumWeaponsState);
  const [selectedSmallWeaponList] = useRecoilState(selectedSmallWeaponsState);
  const [selectedToolList] = useRecoilState(selectedToolsState);
  const [selectedConsumableList] = useRecoilState(selectedConsumablesState);
  const [loadout, setLoadout] = useRecoilState(loadoutState);

  const classes = useStyles();

  const randomizeLoadout = () => {
    const lOrM = Math.floor(Math.random() * 10) % 2;

    const primaryKey =
      lOrM === 0 && selectedMediumWeaponList.length > 0
        ? selectedMediumWeaponList[
            Math.floor(Math.random() * selectedMediumWeaponList.length)
          ]
        : selectedLargeWeaponList[
            Math.floor(Math.random() * selectedLargeWeaponList.length)
          ];
    const secondaryKey =
      lOrM === 0 && selectedMediumWeaponList.length > 0
        ? selectedMediumWeaponList[
            Math.floor(Math.random() * selectedMediumWeaponList.length)
          ]
        : selectedSmallWeaponList[
            Math.floor(Math.random() * selectedSmallWeaponList.length)
          ];
    const toolOneKey =
      selectedToolList[Math.floor(Math.random() * selectedToolList.length)];
    const toolTwoKey =
      selectedToolList[Math.floor(Math.random() * selectedToolList.length)];
    const toolThreeKey =
      selectedToolList[Math.floor(Math.random() * selectedToolList.length)];
    const toolFourKey =
      selectedToolList[Math.floor(Math.random() * selectedToolList.length)];
    const consumableOneKey =
      selectedConsumableList[
        Math.floor(Math.random() * selectedConsumableList.length)
      ];
    const consumableTwoKey =
      selectedConsumableList[
        Math.floor(Math.random() * selectedConsumableList.length)
      ];
    const consumableThreeKey =
      selectedConsumableList[
        Math.floor(Math.random() * selectedConsumableList.length)
      ];
    const consumableFourKey =
      selectedConsumableList[
        Math.floor(Math.random() * selectedConsumableList.length)
      ];

    const primary =
      lOrM === 0 && selectedMediumWeaponList.length > 0
        ? weapon.medium[primaryKey]
        : weapon.large[primaryKey];
    const secondary =
      lOrM === 0 && selectedMediumWeaponList.length > 0
        ? weapon.medium[secondaryKey]
        : weapon.small[secondaryKey];
    const toolOne = tool[toolOneKey];
    const toolTwo = tool[toolTwoKey];
    const toolThree = tool[toolThreeKey];
    const toolFour = tool[toolFourKey];
    const consumableOne = consumable[consumableOneKey];
    const consumableTwo = consumable[consumableTwoKey];
    const consumableThree = consumable[consumableThreeKey];
    const consumableFour = consumable[consumableFourKey];

    const prevState = Object.assign({}, loadout);

    const newLoadout = Object.assign(prevState, {
      primary: primary,
      secondary: secondary,
      tools: {
        one: { item: toolOne, isLocked: loadout.tools.one.isLocked },
        two: { item: toolTwo, isLocked: loadout.tools.two.isLocked },
        three: { item: toolThree, isLocked: loadout.tools.three.isLocked },
        four: { item: toolFour, isLocked: loadout.tools.four.isLocked },
      },
      consumables: {
        one: {
          item: consumableOne,
          isLocked: loadout.consumables.one.isLocked,
        },
        two: {
          item: consumableTwo,
          isLocked: loadout.consumables.two.isLocked,
        },
        three: {
          item: consumableThree,
          isLocked: loadout.consumables.three.isLocked,
        },
        four: {
          item: consumableFour,
          isLocked: loadout.consumables.four.isLocked,
        },
      },
    });

    setLoadout(newLoadout);
  };

  return (
    <>
      <h1 className={classes.headerH1}>Hunt: Showdown</h1>
      <h2 className={classes.headerH2}>Chaos Hunter</h2>
      <div className={classes.rollTheDiceContainer}>
        <button className={classes.rollTheDice} onClick={randomizeLoadout}>
          Roll The Dice
        </button>
      </div>
      <div className={classes.gridContainer}>
        <div className={classes.weaponSelector}>
          <WeaponSelector />
        </div>
        <div className={classes.toolsSelector}>
          <ToolsSelector />
        </div>
        <div className={classes.consumablesSelector}>
          <ConsumablesSelector />
        </div>
      </div>
    </>
  );
};

export default RandomLoadout;
