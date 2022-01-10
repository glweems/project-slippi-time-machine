import * as slippi from '@slippi/slippi-js';
import fs from 'fs-extra';
import glob from 'glob';
import _ from 'lodash';
import path from 'path';

import { extractPlayers, findWinnerIndex } from './util';

export type SortOption =
  | 'year'
  | 'month'
  | 'day'
  | 'player'
  | 'stage'
  | 'win-loss';
export type ConnectCodeType = '{string}#{number}';

export type SortSlippiDirOpts = {
  slippiDir: string;
  sortBy?: SortOption | SortOption[];
  recursive?: boolean;
  filterShortGames?: boolean;
  deleteShortGames?: boolean;
  hrFormat?: '24' | '12';
  connectCode?: ConnectCodeType;
};

const genSortDate = (fileName: string) => {
  console.log(fileName);
  const isValid = true;
  const buffer = fs.readFileSync(fileName);
  const game = new slippi.SlippiGame(buffer);
  const settings = game.getSettings();
  const metadata = game.getMetadata();
  if (!settings || !metadata?.startAt || !metadata?.players) return;
  const date = new Date(metadata?.startAt);

  const winnerIdx = findWinnerIndex(game.getLatestFrame());
  const players = extractPlayers(metadata.players);
  const winner = players.find((player) => player.playerIndex === winnerIdx);
};

genSortDate(
  'Slippi/slp.1/2021/02/2021-02-20-2:07(am)_[Falco]_vs_[Falcon]-0-BAT.slp'
);

function getSearchPattern(searchDir: string, recursive: boolean) {
  const searchPattern = recursive ? '**/*.slp' : '/*.slp';
  return path.join(searchDir, searchPattern);
}
export const sortSlippiDir = (opts: SortSlippiDirOpts) => {
  const {
    slippiDir,
    sortBy,
    recursive,
    filterShortGames,
    deleteShortGames,
    hrFormat,
    connectCode,
  } = opts;
  const searchDir = path.resolve(slippiDir);

  const pattern = getSearchPattern(searchDir, recursive ?? true);
  // console.log(chalk.grey(`Searching for SLP files in ${pattern}`));
  const files = glob.sync(pattern);

  const fileCount = files.length;

  // console.table(files);
  /* const files = fs.readdirSync(slippiDir);
  const filePaths = files.map((file) => path.join(slippiDir, file));
  const filePathsByDate = filePaths.reduce((acc, filePath) => {
    const birthtime = fs.statSync(filePath).birthtime;
    const date = dateObj(birthtime);
    const dateStr = [date.year, date.month, date.day].join('-');
    if (!acc[dateStr]) acc[dateStr] = [];
    acc[dateStr].push(filePath);
    return acc;
  }, {});
  const sortedDates = Object.keys(filePathsByDate).sort();
  const sortedFilePaths = sortedDates.reduce((acc, date) => {
    const filePaths = filePathsByDate[date];
    const sortedFilePaths = filePaths.sort((a, b) => {
      const aGame = new SlippiGame(fs.readFileSync(a));
      const bGame = new SlippiGame(fs.readFileSync(b));
      const aSettings = aGame.getSettings();
      const bSettings = bGame.getSettings();
      const aMetadata = aGame.getMetadata();
      const bMetadata = bGame.getMetadata();
      const aPlayers = aMetadata.players;
      const bPlayers = bMetadata.players;
      const aConnectCode = aPlayers.find((player) => player.isWinner).connectCode;
      const bConnectCode = bPlayers.find((player) => player.isWinner).connectCode;
      const aPlayer = aPlayers.find((player) => player.connectCode === aConnectCode);
      const bPlayer = bPlayers.find((player) => player.connectCode === bConnectCode);
      const aStage = aSettings.stageId;
      const bStage = bSettings */
};
sortSlippiDir({ slippiDir: 'Slippi/slp', recursive: true });
sortSlippiDir({ slippiDir: 'Slippi/slp' });

// export const sortSlippiDir = (opts: SortSlippiDirOpts) => {
//   let searchDir = dir;
//   if (searchDir.endsWith('/')) searchDir = dir.slice(0, -1);
//   const pattern = `${searchDir}${recursive ? '/**' : '/'}/*.slp`;

//   const files = glob.sync(pattern);

//   const errorFiles = [];
//   files.forEach(async (file, index) => {
//     const data = generateFileData({
//       file,
//       slippiDir: searchDir,
//       connectCode,
//     });

//     const path = await makeDir(data.dateDir);

//     const newFile = [path, data.fileName].join('/');

//     try {
//       fs.renameSync(file, newFile);
//     } catch (error) {
//       errorFiles.push(file);
//     }
//   });
//   errorFiles.forEach((errFile) => {
//     throw new Error(`Error sorting ${errFile}`);
//   });
//   deleteEmpty.sync(searchDir, { junkRegex: /^\./ });
// };
