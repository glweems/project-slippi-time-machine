import { PrismaClient } from '@prisma/client';
import { SlippiGame } from '@slippi/slippi-js';
import fs from 'fs';

import { generateGameData } from '../src/generateGameData';

const prisma = new PrismaClient();

const main = async () => {
  const game = new SlippiGame('slp/test.slp');
  const data = generateGameData(game) as any;
  await prisma.$connect();

  try {
    await prisma.game.create({ data });
  } catch (error) {
    console.error(error);
  }
  fs.writeFileSync('prisma/game.json', JSON.stringify(data, null, 2));
};

main();
