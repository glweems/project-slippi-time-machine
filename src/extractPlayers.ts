import type { MetadataType } from '@slippi/slippi-js';
import { characters } from '@slippi/slippi-js';

export type MetadataPlayersType = MetadataType['players'];

export const extractPlayers = (players: MetadataPlayersType) => {
  const fPlayers = Object.keys(players).map((key) => {
    const { names, characters: chars } = players[key];
    const p: any = {};
    Object.keys(chars).forEach((charKey) => {
      const colorId = chars[charKey];
      const charId = Number(charKey);
      p.character = characters.getCharacterInfo(charId);
      const character = {
        id: charId,
        colorId,
        // name: getCharacterName(charId),
        // shortName: getCharacterShortName(charId),
        color: characters.getCharacterColorName(charId, colorId),
        ...characters.getCharacterInfo(charId),
      };
    });
    console.log(p);
    return { playerIndex: Number(key) };
  });
  return fPlayers;
};
