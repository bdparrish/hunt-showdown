import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import { useRecoilState } from 'recoil';

import ToolSelectorModalList from './ToolsSelectorModalList';
import { selectedToolsState } from '../atoms';

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

const ToolsSelectorModal = (props) => {
  const { open, onClose } = props;

  const [selectedToolList, setSelectedToolList] = useRecoilState(
    selectedToolsState,
  );

  const classes = useStyles();

  const onChangeTool = (event) => {
    const checked = event.currentTarget.checked;
    const key = event.currentTarget.id;

    let newList = [];

    if (checked) {
      newList = [...selectedToolList, key];
    } else {
      const idx = selectedToolList.findIndex((i) => i === key);
      if (idx !== -1) {
        newList = [
          ...selectedToolList.slice(0, idx),
          ...selectedToolList.slice(idx + 1),
        ];
      }
    }

    window.localStorage.setItem('toolsList', newList);

    setSelectedToolList(newList);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={modalStyle} className={classes.paper}>
        <h2 className={classes.header}>Tools</h2>
        <ToolSelectorModalList onChange={onChangeTool} />
      </div>
    </Modal>
  );
};

export default ToolsSelectorModal;
