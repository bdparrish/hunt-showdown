import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Checkbox, FormControlLabel } from '@material-ui/core';
import { theme } from '../theme';
import weapon from '../data/weapon.json';

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.primary.main,
  },
}));

const WeaponSelectorModalList = (props) => {
  const { title, weaponKey, onChange, data } = props;

  const classes = useStyles();

  return (
    <>
      <h3 className={classes.header}>{title}</h3>
      {Object.keys(weapon[weaponKey]).map(function (key, _) {
        const checked = data.includes(key) ? true : false;
        const label = weapon[weaponKey][key].name;

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

export default WeaponSelectorModalList;
