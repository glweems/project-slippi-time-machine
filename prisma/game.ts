import { SlippiGame } from '@slippi/slippi-js';

import fs from 'fs';
import { generateGameData } from '../src/game';
(async function main() {
  const game = new SlippiGame('slp/test.slp');
  const data = generateGameData('tes', game);
  await fs.writeFileSync('prisma/game.json', JSON.stringify(data, null, 2));
})();
