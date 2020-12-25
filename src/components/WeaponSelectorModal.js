import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import { useRecoilState } from 'recoil';

import WeaponSelectorModalList from './WeaponSelectorModalList';
import {
  selectedLargeWeaponsState,
  selectedMediumWeaponsState,
  selectedSmallWeaponsState,
} from '../atoms';

const modalStyle = {
  top: `50%`,
  left: `50%`,
  transform: `translate(-50%, -50%)`,
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.text.primary,
    border: '2px solid ' + theme.palette.primary.main,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 'none',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  header: {
    color: theme.palette.primary.main,
  },
}));

const WeaponSelectorModal = (props) => {
  const { open, onClose } = props;

  const [selectedLargeWeaponList, setSelectedLargeWeaponList] = useRecoilState(
    selectedLargeWeaponsState,
  );
  const [
    selectedMediumWeaponList,
    setSelectedMediumWeaponList,
  ] = useRecoilState(selectedMediumWeaponsState);
  const [selectedSmallWeaponList, setSelectedSmallWeaponList] = useRecoilState(
    selectedSmallWeaponsState,
  );

  const classes = useStyles();

  const onChangeLargeWeapon = (event) => {
    const checked = event.currentTarget.checked;
    const key = event.currentTarget.id;

    let newList = [];

    if (checked) {
      newList = [...selectedLargeWeaponList, key];
    } else {
      const idx = selectedLargeWeaponList.findIndex((i) => i === key);
      if (idx !== -1) {
        newList = [
          ...selectedLargeWeaponList.slice(0, idx),
          ...selectedLargeWeaponList.slice(idx + 1),
        ];
      }
    }

    window.localStorage.setItem('largeWeaponList', newList);

    setSelectedLargeWeaponList(newList);
  };

  const onChangeMediumWeapon = (event) => {
    const checked = event.currentTarget.checked;
    const key = event.currentTarget.id;

    let newList = [];

    if (checked) {
      newList = [...selectedMediumWeaponList, key];
    } else {
      const idx = selectedMediumWeaponList.findIndex((i) => i === key);
      if (idx !== -1) {
        newList = [
          ...selectedMediumWeaponList.slice(0, idx),
          ...selectedMediumWeaponList.slice(idx + 1),
        ];
      }
    }

    window.localStorage.setItem('mediumWeaponList', newList);

    setSelectedMediumWeaponList(newList);
  };

  const onChangeSmallWeapon = (event) => {
    const checked = event.currentTarget.checked;
    const key = event.currentTarget.id;

    let newList = [];

    if (checked) {
      newList = [...selectedSmallWeaponList, key];
    } else {
      const idx = selectedSmallWeaponList.findIndex((i) => i === key);
      if (idx !== -1) {
        newList = [
          ...selectedSmallWeaponList.slice(0, idx),
          ...selectedSmallWeaponList.slice(idx + 1),
        ];
      }
    }

    window.localStorage.setItem('smallWeaponList', newList);

    setSelectedSmallWeaponList(newList);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        <h2 className={classes.header}>Weapons</h2>
        <WeaponSelectorModalList
          key="large"
          title="Large"
          weaponKey="large"
          onChange={onChangeLargeWeapon}
          data={selectedLargeWeaponList}
        />
        <WeaponSelectorModalList
          key="medium"
          title="Medium"
          weaponKey="medium"
          onChange={onChangeMediumWeapon}
          data={selectedMediumWeaponList}
        />
        <WeaponSelectorModalList
          key="small"
          title="Small"
          weaponKey="small"
          onChange={onChangeSmallWeapon}
          data={selectedSmallWeaponList}
        />
      </div>
    </Modal>
  );
};

export default WeaponSelectorModal;
