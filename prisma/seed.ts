import { PrismaClient } from '@prisma/client';
import { SlippiGame } from '@slippi/slippi-js';
import cliProgress from 'cli-progress';
import fs from 'fs';
import glob from 'glob';
import path from 'path';

import { generateGameData } from '../generateGameData';

const slippiDir = 'slp';

// ()(slippiDir)
const prisma = new PrismaClient();
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
// start the progress bar with a total value of 200 and start value of 0

const main = async (dir: string, recursive = false) => {
  const pattern = `${path.join('.', dir)}${recursive ? '/**' : '/'}/*.slp`;
  const opts: glob.IOptions = {
    root: dir,
    dot: false,
  };

  const baseDir = path.join('.', dir);

  const files = glob.sync(pattern, opts);
  bar.start(files.length, 0);
  files.forEach(async (file, index) => {
    const buffer = fs.readFileSync(file);

    const slippiGame = new SlippiGame(buffer);
    const data = generateGameData(slippiGame) as any;

    await prisma.game
      .create({ data })
      .then((res) => {
        bar.increment(index + 1);
      })
      .catch((err) => console.error(err));
  });
};

main(slippiDir, true);
