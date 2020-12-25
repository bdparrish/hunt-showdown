import { atom } from 'recoil';

import weapon from '../data/weapon.json';
import tools from '../data/tools.json';
import consumables from '../data/consumables.json';

export const loadoutState = atom({
  key: 'loadoutState',
  default: {
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
  },
});

export default loadoutState;
