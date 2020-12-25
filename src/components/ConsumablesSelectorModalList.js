import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { theme } from '../theme';

import consumable from '../data/consumables.json';
import { selectedConsumablesState } from '../atoms';

const ConsumablesSelectorModalList = (props) => {
  const { onChange } = props;

  const [selectedConsumableList] = useRecoilState(selectedConsumablesState);

  return (
    <>
      {Object.keys(consumable).map(function (key, _) {
        const checked = selectedConsumableList.includes(key) ? true : false;
        const label = consumable[key].name;

        return (
          <div key={key}>
            <FormControlLabel
              control={
                <Checkbox
                  style={{ color: theme.palette.primary.main }}
                  id={key}
                  checked={checked}
                  onChange={onChange}
                />
              }
              label={label}
            />
          </div>
        );
      })}
    </>
  );
};

export default ConsumablesSelectorModalList;
