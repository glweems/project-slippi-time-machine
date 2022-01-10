import { PrismaClient } from '@prisma/client';
import { characters, SlippiGame } from '@slippi/slippi-js';
import fs from 'fs';
import path from 'path';
import glob from 'glob';
import cliProgress from 'cli-progress';
import { generateGameData } from '../src/game';

const slippiDir = 'slp';

// ()(slippiDir)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const prisma = new PrismaClient();
const bar = new cliProgress.SingleBar({}, cliProgress.Presets.rect);
// start the progress bar with a total value of 200 and start value of 0

const main = async (dir: string, recursive = false) => {
  await prisma.$connect();
  // /slippiDir/*.slp or /slippiDir*.slp
  // console.log(path.resolve('.'));
  const pattern = `${path.join('.', dir)}${recursive ? '/**' : '/'}/*.slp`;
  const opts: glob.IOptions = {
    root: dir,
    dot: false,
  };
  try {
    const baseDir = path.join('.', dir);
    const searchDirs = [path.join(baseDir, '*.slp')];

    const files = glob.sync(pattern, opts);
    bar.start(files.length, 0);
    const games = [];
    files.forEach(async (file, index) => {
      const buffer = fs.readFileSync(file);

      const slippiGame = new SlippiGame(buffer);
      const { players, ...data } = generateGameData(file, slippiGame);
      const game = {
        ...data,
        players: players.map(p => prisma.player.create({ data: p as any })),
      };
      games.push(game);

      bar.increment(1);
    });

    console.log(files.length);
  } catch (error) {
    console.error(error);
    bar.stop();
  }
  bar.stop();
};

main(slippiDir, true);
