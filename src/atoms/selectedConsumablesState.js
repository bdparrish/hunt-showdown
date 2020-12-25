import { atom } from 'recoil';

export const selectedConsumablesState = atom({
  key: 'selectedConsumablesState',
  default: window.localStorage.getItem('consumablesList')
    ? window.localStorage.getItem('consumablesList').split(',')
    : [],
});
