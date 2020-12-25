import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import { useRecoilState } from 'recoil';

import ConsumableSelectorModalList from './ConsumablesSelectorModalList';
import { selectedConsumablesState } from '../atoms';

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

const ConsumablesSelectorModal = (props) => {
  const { open, onClose } = props;

  const [selectedConsumableList, setSelectedConsumableList] = useRecoilState(
    selectedConsumablesState,
  );

  const classes = useStyles();

  const onChangeConsumable = (event) => {
    const checked = event.currentTarget.checked;
    const key = event.currentTarget.id;

    let newList = [];

    if (checked) {
      newList = [...selectedConsumableList, key];
    } else {
      const idx = selectedConsumableList.findIndex((i) => i === key);
      if (idx !== -1) {
        newList = [
          ...selectedConsumableList.slice(0, idx),
          ...selectedConsumableList.slice(idx + 1),
        ];
      }
    }

    window.localStorage.setItem('consumablesList', newList);

    setSelectedConsumableList(newList);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        <h2 className={classes.header}>Consumables</h2>
        <ConsumableSelectorModalList onChange={onChangeConsumable} />
      </div>
    </Modal>
  );
};

export default ConsumablesSelectorModal;
