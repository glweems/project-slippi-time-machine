import { PrismaClient } from '@prisma/client';
import { characters, SlippiGame } from '@slippi/slippi-js';

import fs from 'fs';
import { generateGameData } from '../src/game';

const prisma = new PrismaClient();
(async function main() {
  const data = characters.getAllCharacters().map(({ id, ...character }) => ({
    characterId: id,
    ...character,
  }));
  await prisma.$connect;
  await prisma.character.createMany({ data }).catch(e => console.error(e));
  // const game = new SlippiGame('slp/Game_20210408T004839.slp');
  // const data = generateGameData('Game_20210408T004839', game);
  await fs.writeFileSync('prisma/characters.json', JSON.stringify(data, null, 2));
})();
