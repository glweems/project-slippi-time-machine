import { PrismaClient } from '@prisma/client';
import { SlippiGame } from '@slippi/slippi-js';
import fs from 'fs';
import path from 'path';
import { generateGameData } from './game';
import { GameData } from './types';

export const storeGame = async (game: GameData) => {
  const prisma = new PrismaClient();
  await prisma.$connect();
  const players = new Set();
  game.settings?.players.forEach(player => {
    players.add(player.connectCode);
  });
  console.log(players);
  await prisma.game.create({ data: game });
  await prisma.$disconnect();
};
type DetailsCheckTuple = [boolean | undefined | null | false, string];

const isValidGameData = (details: GameData): boolean | string => {
  const checks: DetailsCheckTuple[] = [
    [!details.settings?.isTeams, 'Teams Game Data is not supported'],
    [details.settings?.players.length === 2, 'Game must have 2 players'],
  ];
  let errMsg = '';

  const isValid = checks.every(([check, message]) => {
    if (!check) errMsg = message;

    return check ? true : message;
  });

  return isValid ? true : errMsg;
};

export const gameDetailsFromSLPDir = async (slpDir: string): Promise<GameData[]> => {
  const slpGames: GameData[] = [];

  const slpFilePaths = await fs.promises.readdir(slpDir);

  slpFilePaths.forEach(async file => {
    const game = new SlippiGame(path.join(slpDir, file));

    const details = generateGameData(file, game);
    const status = isValidGameData(details);
    if (status === true) slpGames.push(details);
    else console.error(status);
  });

  return slpGames;
};

export const storeGamesFromSLPDir = async slpDir => {};
export const storeGames = async (games: GameData[]) => {};
