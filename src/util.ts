import { SlippiGame } from '@slippi/slippi-js';
import fs from 'fs';
import moment from 'moment';
import path from 'path';
import { generateGameData } from './game';
import { GameData } from './types';

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

export const createGamesJson = async (slpDir: string, outDir = 'games.json') => {
  const games: GameData[] = [];
  const dir = await fs.promises.opendir(slpDir);

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
