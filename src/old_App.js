import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Modal, Slider } from '@material-ui/core';
import React, { useState } from 'react';

import './App.css';

const lock = 'https://chaoshunter.herokuapp.com/img?lock.png';

const initialModel = {
  primary: weapon.large.mosinNagantM1891,
  secondary: weapon.small.caldwellConversionUppercut,
  tools: {
    one: {
      item: tools.alertTripMines,
      isLocked: false,
    },
    two: {
      item: tools.concertinaTripMines,
      isLocked: false,
    },
    three: {
      item: tools.blankFireDecoys,
      isLocked: false,
    },
    four: {
      item: tools.chokeBomb,
      isLocked: false,
    },
  },
  consumables: {
    one: {
      item: consumables.antidoteShot,
      isLocked: false,
    },
    two: {
      item: consumables.bigDynamiteBundle,
      isLocked: false,
    },
    three: {
      item: consumables.chaosBomb,
      isLocked: false,
    },
    four: {
      item: consumables.concertinaBomb,
      isLocked: false,
    },
  },
};

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#000',
    color: '#fff',
    border: '2px solid #f00',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    maxHeight: '50vh',
    overflowY: 'auto',
  },
  toolSlider: {
    gridRow: 3,
  },
  consumableSlider: {
    gridRow: 6,
  },
}));

const HuntSlider = withStyles({
  root: {
    color: '#f00',
    width: 520,
    height: 2,
    gridColumn: '1/5',
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
      <img src={lock}></img>
    </span>
  );
}

function App() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const [primaryImg, setPrimaryImg] = useState(initialModel.primary.img);
  const [primaryName, setPrimaryName] = useState(initialModel.primary.name);

  const [secondaryImg, setSecondaryImg] = useState(initialModel.secondary.img);
  const [secondaryName, setSecondaryName] = useState(
    initialModel.secondary.name,
  );

  const [toolOneImg, setToolOneImg] = useState(initialModel.tools.one.item.img);
  const [toolOneName, setToolOneName] = useState(
    initialModel.tools.one.item.name,
  );
  const [toolOneLocked, setToolOneLocked] = useState(
    initialModel.tools.one.isLocked,
  );

  const [toolTwoImg, setToolTwoImg] = useState(initialModel.tools.two.item.img);
  const [toolTwoName, setToolTwoName] = useState(
    initialModel.tools.two.item.name,
  );
  const [toolTwoLocked, setToolTwoLocked] = useState(
    initialModel.tools.two.isLocked,
  );

  const [toolThreeImg, setToolThreeImg] = useState(
    initialModel.tools.three.item.img,
  );
  const [toolThreeName, setToolThreeName] = useState(
    initialModel.tools.three.item.name,
  );
  const [toolThreeLocked, setToolThreeLocked] = useState(
    initialModel.tools.three.isLocked,
  );

  const [toolFourImg, setToolFourImg] = useState(
    initialModel.tools.four.item.img,
  );
  const [toolFourName, setToolFourName] = useState(
    initialModel.tools.four.item.name,
  );
  const [toolFourLocked, setToolFourLocked] = useState(
    initialModel.tools.four.isLocked,
  );

  const [consumableOneImg, setConsumableOneImg] = useState(
    initialModel.consumables.one.item.img,
  );
  const [consumableOneName, setConsumableOneName] = useState(
    initialModel.consumables.one.item.name,
  );
  const [consumableOneLocked, setConsumableOneLocked] = useState(
    initialModel.consumables.one.isLocked,
  );

  const [consumableTwoImg, setConsumableTwoImg] = useState(
    initialModel.consumables.two.item.img,
  );
  const [consumableTwoName, setConsumableTwoName] = useState(
    initialModel.consumables.two.item.name,
  );
  const [consumableTwoLocked, setConsumableTwoLocked] = useState(
    initialModel.consumables.two.isLocked,
  );

  const [consumableThreeImg, setConsumableThreeImg] = useState(
    initialModel.consumables.three.item.img,
  );
  const [consumableThreeName, setConsumableThreeName] = useState(
    initialModel.consumables.three.item.name,
  );
  const [consumableThreeLocked, setConsumableThreeLocked] = useState(
    initialModel.consumables.three.isLocked,
  );

  const [consumableFourImg, setConsumableFourImg] = useState(
    initialModel.consumables.four.item.img,
  );
  const [consumableFourName, setConsumableFourName] = useState(
    initialModel.consumables.four.item.name,
  );
  const [consumableFourLocked, setConsumableFourLocked] = useState(
    initialModel.consumables.four.isLocked,
  );

  const [openPrimary, setOpenPrimary] = useState(false);
  const [openTools, setOpenTools] = useState(false);
  const [openConsumables, setOpenConsumables] = useState(false);

  const [largeWeaponSelect, setLargeWeaponSelect] = useState([]);
  const [mediumWeaponSelect, setMediumWeaponSelect] = useState([]);
  const [smallWeaponSelect, setSmallWeaponSelect] = useState([]);
  const [toolsSelect, setToolsSelect] = useState([]);
  const [consumablesSelect, setConsumablesSelect] = useState([]);

  const handleOpenPrimary = () => {
    setOpenPrimary(true);
  };

  const handleClosePrimary = () => {
    setOpenPrimary(false);
  };

  const handleOpenTools = () => {
    setOpenTools(true);
  };

  const handleCloseTools = () => {
    setOpenTools(false);
  };

  const handleOpenConsumables = () => {
    setOpenConsumables(true);
  };

  const handleCloseConsumables = () => {
    setOpenConsumables(false);
  };

  const handleToolSliderChange = (event, value) => {
    switch (value) {
      case 0:
        setToolOneLocked(true);
        setToolTwoLocked(true);
        setToolThreeLocked(true);
        setToolFourLocked(true);
        break;
      case 1:
        setToolOneLocked(false);
        setToolTwoLocked(true);
        setToolThreeLocked(true);
        setToolFourLocked(true);
        break;
      case 2:
        setToolOneLocked(false);
        setToolTwoLocked(false);
        setToolThreeLocked(true);
        setToolFourLocked(true);
        break;
      case 3:
        setToolOneLocked(false);
        setToolTwoLocked(false);
        setToolThreeLocked(false);
        setToolFourLocked(true);
        break;
      case 4:
        setToolOneLocked(false);
        setToolTwoLocked(false);
        setToolThreeLocked(false);
        setToolFourLocked(false);
        break;
    }
  };

  const handleConsumableSliderChange = (event, value) => {
    switch (value) {
      case 0:
        setConsumableOneLocked(true);
        setConsumableTwoLocked(true);
        setConsumableThreeLocked(true);
        setConsumableFourLocked(true);
        break;
      case 1:
        setConsumableOneLocked(false);
        setConsumableTwoLocked(true);
        setConsumableThreeLocked(true);
        setConsumableFourLocked(true);
        break;
      case 2:
        setConsumableOneLocked(false);
        setConsumableTwoLocked(false);
        setConsumableThreeLocked(true);
        setConsumableFourLocked(true);
        break;
      case 3:
        setConsumableOneLocked(false);
        setConsumableTwoLocked(false);
        setConsumableThreeLocked(false);
        setConsumableFourLocked(true);
        break;
      case 4:
        setConsumableOneLocked(false);
        setConsumableTwoLocked(false);
        setConsumableThreeLocked(false);
        setConsumableFourLocked(false);
        break;
    }
  };

  const rollTheDice = () => {
    const primaryKey =
      largeWeaponSelect[Math.floor(Math.random() * largeWeaponSelect.length)];
    const secondaryKey =
      smallWeaponSelect[Math.floor(Math.random() * smallWeaponSelect.length)];
    const toolOneKey = Object.keys(tools)[
      Math.floor(Math.random() * Object.keys(tools).length)
    ];
    const toolTwoKey = Object.keys(tools)[
      Math.floor(Math.random() * Object.keys(tools).length)
    ];
    const toolThreeKey = Object.keys(tools)[
      Math.floor(Math.random() * Object.keys(tools).length)
    ];
    const toolFourKey = Object.keys(tools)[
      Math.floor(Math.random() * Object.keys(tools).length)
    ];
    const consumableOneKey = Object.keys(consumables)[
      Math.floor(Math.random() * Object.keys(consumables).length)
    ];
    const consumableTwoKey = Object.keys(consumables)[
      Math.floor(Math.random() * Object.keys(consumables).length)
    ];
    const consumableThreeKey = Object.keys(consumables)[
      Math.floor(Math.random() * Object.keys(consumables).length)
    ];
    const consumableFourKey = Object.keys(consumables)[
      Math.floor(Math.random() * Object.keys(consumables).length)
    ];

    const primary = weapon.large[primaryKey];
    const secondary = weapon.small[secondaryKey];
    const toolOne = tools[toolOneKey];
    const toolTwo = tools[toolTwoKey];
    const toolThree = tools[toolThreeKey];
    const toolFour = tools[toolFourKey];
    const consumableOne = consumables[consumableOneKey];
    const consumableTwo = consumables[consumableTwoKey];
    const consumableThree = consumables[consumableThreeKey];
    const consumableFour = consumables[consumableFourKey];

    setPrimaryImg(primary.img);
    setPrimaryName(primary.name);

    setSecondaryImg(secondary.img);
    setSecondaryName(secondary.name);
  };

  const onToolsSelect = (event) => {};

  const onConsumablesSelect = (event) => {};

  return (
    <>
      <div className="App">
        <h1>Hunt: Showdown</h1>
        <h2>Chaos Hunter</h2>
        <button class="random" onClick={rollTheDice}>
          Roll The Dice
        </button>
        <div class="weapon">
          <div class="primary center">
            <div class="center slot slot-lg">
              <img src={'/img' + primaryImg + '.png'}></img>
            </div>
          </div>
          <span class="primary-label">{primaryName}</span>
          <div class="secondary center">
            <div class="center slot slot-sm">
              <img src={'/img' + secondaryImg + '.png'}></img>
            </div>
          </div>
          <span class="secondary-label">{secondaryName}</span>
          <button
            class="settings-wheel"
            type="button"
            onClick={handleOpenPrimary}
          >
            <img src="/img/settings_wheel.png"></img>
          </button>
        </div>
        <div class="loadout center">
          <div class="tools one slot slot-sm">
            <img
              src={toolOneLocked ? lock : '/img/tools/' + toolOneImg + '.png'}
            ></img>
          </div>
          <div class="tools two slot slot-sm">
            <img
              src={toolTwoLocked ? lock : '/img/tools/' + toolTwoImg + '.png'}
            ></img>
          </div>
          <div class="tools three slot slot-sm">
            <img
              src={
                toolThreeLocked ? lock : '/img/tools/' + toolThreeImg + '.png'
              }
            ></img>
          </div>
          <div class="tools four slot slot-sm">
            <img
              src={toolFourLocked ? lock : '/img/tools/' + toolFourImg + '.png'}
            ></img>
          </div>
          <button
            class="tools settings-wheel"
            type="button"
            onClick={handleOpenTools}
          >
            <img src="/img/settings_wheel.png"></img>
          </button>
          <span class="tools one label">
            {toolOneLocked ? '' : toolOneName}
          </span>
          <span class="tools two label">
            {toolTwoLocked ? '' : toolTwoName}
          </span>
          <span class="tools three label">
            {toolThreeLocked ? '' : toolThreeName}
          </span>
          <span class="tools four label">
            {toolFourLocked ? '' : toolFourName}
          </span>
          <div class="consumables one slot slot-sm">
            <img
              src={
                consumableOneLocked
                  ? lock
                  : '/img/consumables/' + consumableOneImg + '.png'
              }
            ></img>
          </div>
          <div class="consumables two slot slot-sm">
            <img
              src={
                consumableTwoLocked
                  ? lock
                  : '/img/consumables/' + consumableTwoImg + '.png'
              }
            ></img>
          </div>
          <div class="consumables three slot slot-sm">
            <img
              src={
                consumableThreeLocked
                  ? lock
                  : '/img/consumables/' + consumableThreeImg + '.png'
              }
            ></img>
          </div>
          <div class="consumables four slot slot-sm">
            <div class="img-wrapper center">
              <img
                src={
                  consumableFourLocked
                    ? lock
                    : '/img/consumables/' + consumableFourImg + '.png'
                }
              ></img>
            </div>
          </div>
          <button
            class="consumables settings-wheel"
            type="button"
            onClick={handleOpenConsumables}
          >
            <img src="/img/settings_wheel.png"></img>
          </button>
          <span class="consumables one label">
            {consumableOneLocked ? '' : consumableOneName}
          </span>
          <span class="consumables two label">
            {consumableTwoLocked ? '' : consumableTwoName}
          </span>
          <span class="consumables three label">
            {consumableThreeLocked ? '' : consumableThreeName}
          </span>
          <span class="consumables four label">
            {consumableFourLocked ? '' : consumableFourName}
          </span>
          <div className={classes.consumableSlider}>
            <HuntSlider
              ThumbComponent={HuntThumbComponent}
              defaultValue={4}
              step={1}
              marks
              min={0}
              max={4}
              valueLabelDisplay="auto"
              onChange={handleConsumableSliderChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
