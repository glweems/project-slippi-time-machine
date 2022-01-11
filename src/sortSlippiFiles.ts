/* eslint-disable no-plusplus */
import * as slippi from '@slippi/slippi-js';
import fs from 'fs-extra';
import glob from 'glob';
import mkDir from 'make-dir';
import moment from 'moment';
import path from 'path';
import ProgressBar from 'progress';

import { extractPlayers } from './extractPlayers';
import { findWinnerIndex, getSearchPattern } from './util';

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


const genSortData = (fileName: string) => {
  const isValid = true;
  const buffer = fs.readFileSync(fileName);
  const game = new slippi.SlippiGame(buffer);
  const settings = game.getSettings();
  const metadata = game.getMetadata();
  if (!settings || !metadata?.startAt || !metadata?.players) {
    throw new Error('No settings or metadata found');
  }

  const date = new Date(metadata?.startAt);

  const winnerIndex = findWinnerIndex(game.getLatestFrame());
  const players = extractPlayers(metadata?.players as any);
  const winner = players.find((player) => player.playerIndex === winnerIndex);
  return {
    fullPath: fileName,
    name: path.basename(fileName),
    date,
    winner,
    winnerIndex,
    players,
  };
};

export const sortSlippiDir = async (opts: SortSlippiDirOpts) => {
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
  const bar = new ProgressBar(':bar| :percent :index/:total :time', {
    total: fileCount,
    width: 10,
  });
  // bar.start(fileCount, 0);
  files.forEach(async (file, index) => {
    const startTime = Date.now();
    const data = genSortData(file);
    const endTime = Date.now();
    const timeTaken = endTime - startTime;
    const s = moment(timeTaken).format('h:mm:ss a');
    console.log(JSON.stringify(data, null, 2));
    bar.tick({
      index,
      total: fileCount,
      percent: index / fileCount,
      time: timeTaken,
    });
  });

  // bar.stop();
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
sortSlippiDir({ slippiDir: 'Slippi/slp', sortBy: 'year', recursive: true });
// sortSlippiDir({ slippiDir: 'Slippi/slp' });

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
