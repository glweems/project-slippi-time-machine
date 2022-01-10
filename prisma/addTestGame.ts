import { PrismaClient } from '@prisma/client';
import { SlippiGame } from '@slippi/slippi-js';

import { generateGameData } from '../generateGameData';

const slippiDir = 'slp';

const prisma = new PrismaClient();

(async function main() {
  const slippiGame = new SlippiGame('../slp/test.slp');
  const gameData = generateGameData('test', slippiGame);
  await prisma.$connect;
  await prisma.game
    .upsert({
      create: gameData,
      update: {},
      where: { gameId: gameData.gameId },
    })
    .catch((e) => console.error(e));
})();
