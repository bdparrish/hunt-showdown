import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { theme } from '../theme';

import tool from '../data/tools.json';
import { selectedToolsState } from '../atoms';

const ToolsSelectorModalList = (props) => {
  const { onChange } = props;

  const [selectedToolList] = useRecoilState(selectedToolsState);

  return (
    <>
      {Object.keys(tool).map(function (key, _) {
        const checked = selectedToolList.includes(key) ? true : false;
        const label = tool[key].name;

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

export default ToolsSelectorModalList;
