import type { Character, MetadataType } from '@slippi/slippi-js';
import { characters } from '@slippi/slippi-js';
import type { CharacterInfo } from '@slippi/slippi-js/dist/melee/characters';
import { get } from 'lodash';

import type { ConnectCodeType } from '../sortSlippiFiles';

interface MetadataPlayersTypeName {
  netplay: string;
  code: ConnectCodeType;
}

export type MetadataPlayersType = Record<
  number | string,
  {
    names: MetadataPlayersTypeName;
    characters: Record<Character, number>;
  }
>;

export interface ExtractedPlayerType extends MetadataPlayersTypeName {
  character?: Omit<CharacterInfo, 'colors'>;
  playerIndex: number;
}
export const extractPlayers = (players?: MetadataType['players']) => {
  if (!players) throw new Error('No players found');

  const fPlayers = Object.keys(players).map((playerIndex) => {
    const { names, characters: chars } = players[playerIndex];

    const player: ExtractedPlayerType = {
      playerIndex: Number(playerIndex),
      ...names,
      character: getPlayerCharacters(chars),
    };

    return player;
  });
  return fPlayers;
};
const getPlayerCharacters = (chars: Record<string, number>) =>
  Object.entries(chars)
    .map(([charKey, _colorId]) => {
      // TODO const colorId = chars[charKey];
      const charId = Number(charKey);
      const info = {
        id: charId,
        name: characters.getCharacterName(charId),
        shortName: characters.getCharacterShortName(charId),
      };

      return info;
    })
    .pop();

const players = {
  '0': {},
  '1': {
    names: {
      netplay: 'glweems',
      code: 'GLWE#210',
    },
    characters: {
      '2': 7146,
    },
  },
};
