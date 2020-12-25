import { atom } from 'recoil';

export const selectedLargeWeaponsState = atom({
  key: 'selectedLargeWeaponsState',
  default: window.localStorage.getItem('largeWeaponList')
    ? window.localStorage.getItem('largeWeaponList').split(',')
    : [],
});

export const selectedMediumWeaponsState = atom({
  key: 'selectedMediumWeaponsState',
  default: window.localStorage.getItem('mediumWeaponList')
    ? window.localStorage.getItem('mediumWeaponList').split(',')
    : [],
});

export const selectedSmallWeaponsState = atom({
  key: 'selectedSmallWeaponsState',
  default: window.localStorage.getItem('smallWeaponList')
    ? window.localStorage.getItem('smallWeaponList').split(',')
    : [],
});
