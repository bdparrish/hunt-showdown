import { atom } from 'recoil';

export const selectedToolsState = atom({
  key: 'selectedToolsState',
  default: window.localStorage.getItem('toolsList')
    ? window.localStorage.getItem('toolsList').split(',')
    : [],
});
