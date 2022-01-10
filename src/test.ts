import { characters, SlippiGame } from '@slippi/slippi-js';
// import { getCharacterInfo } from '@slippi/slippi-js/dist/melee/characters';
import { generateGameData } from './game';

const metadata = {
  startAt: '2021-04-08T05:48:39Z',
  lastFrame: 6624,
  players: {
    '0': {
      names: {
        netplay: '$hweems',
        code: 'WEEM#235',
      },
      characters: {
        '18': 6809,
      },
    },
    '1': {
      names: {
        netplay: 'glweems',
        code: 'GLWE#210',
      },
      characters: {
        '22': 6809,
      },
    },
  },
  playedOn: 'dolphin',
};

const players = Object.entries(metadata.players).map(([index, player]) => {
  const [playerChars] = Object.keys(player.characters).map(charCode => characters.getCharacterInfo(Number(charCode)));

  const { netplay, code } = player.names;
  return {
    index: Number(index),
    netplay,
    code,
    playerChars,
  };
});

const game = new SlippiGame('slp/Game_20210408T004839.slp');
const data = generateGameData('slp/Game_20210408T004839.slp', game);
console.log(data);

console.log(players);
