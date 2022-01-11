import type { FrameEntryType } from '@slippi/slippi-js';
import { config } from 'dotenv';
import fs from 'fs';
import moment from 'moment';
import path from 'path';
export function convertFrameCountToDurationString(frameCount: number): string {
  // Enforce positive numbers only
  const totalFrames = Math.max(frameCount, 0);
  const duration = moment.duration(totalFrames / 60, 'seconds');
  return moment.utc(duration.as('milliseconds')).format('m:ss');
}

export function reorder(list: any[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const findWinnerIndex = (
  lastFrame: FrameEntryType | null | any
): number | null => {
  if (lastFrame === null) {
    return null;
  }

  const postFrameEntries = Object.keys(lastFrame.players).map(
    (i) => lastFrame?.players[i].post
  );

  const winnerPostFrame = postFrameEntries.reduce((a, b) => {
    // Determine winner based on stock count
    if (a.stocksRemaining > b.stocksRemaining) {
      return a;
    }
    if (a.stocksRemaining < b.stocksRemaining) {
      return b;
    }

    // Stocks are the same so determine winner based off remaining percent
    if (a.percent < b.percent) {
      return a;
    }
    if (a.percent > b.percent) {
      return b;
    }

    // Just return a by default
    return a;
  });

  return winnerPostFrame.playerIndex;
};

export const getEnv = (path = '.env') => {
  config({ path });
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    connectCode: process.env.CONNECT_CODE,
    slpFolder: process.env.SLP_FOLDER,
  };
};

export const getSearchPattern = (searchDir: string, recursive: boolean) => {
  const searchPattern = recursive ? '**/*.slp' : '/*.slp';
  return path.join(searchDir, searchPattern);
};

export const readPackageJson = (
  location = './package.json',
  property?: string
) => {
  const packageJson = fs.readFileSync(location, 'utf8');
  const parsed = JSON.parse(packageJson);
  if (property) return parsed[property];
  return parsed;
};
/* export const createGamesJson = async (slpDir: string, outDir = 'games.json') => {
  const games: GameData[] = [];
  const dir = await fs.promises.opendir(slpDir);

  // eslint-disable-next-line no-restricted-syntax
  for await (const dirent of dir) {
    const game = new SlippiGame(path.join(slpDir, dirent.name));
    const data = generateGameData(dirent.name, game);
    games.push(data);
  }
  const data = JSON.stringify(games, null, 2);

  fs.writeFile(outDir, data, err => {
    if (err) {
      throw err;
    }
    console.info('Data written to file');
  });
};
 */
