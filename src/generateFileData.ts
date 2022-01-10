import { characters, SlippiGame, stages } from '@slippi/slippi-js';
import fs from 'fs';
import { capitalize } from 'lodash';

import { extractAllPlayerConnectCodes } from './matchNames';
import { dateObj, formatAMPM } from './time';
import { findWinner } from './util';

const stageShortName = (stageId: number) => {
  const fullname = stages.getStageInfo(stageId).name;
  let name: string;
  if (fullname.split(' ').length > 1) {
    name = fullname
      .split(' ')
      .map((word) => word.charAt(0))
      .join('');
  } else name = fullname.slice(0, 3).toUpperCase();

  return name;
};

type GenerateFileDataOptions = {
  file: string;
  slippiDir: string;

  connectCode?: string;
};
export const generateFileData = ({
  file,
  slippiDir,
  connectCode,
}: GenerateFileDataOptions) => {
  const buffer = fs.readFileSync(file);
  const game = new SlippiGame(buffer);
  // For a valid SLP game, at the very least we should have valid settings
  const settings = game?.getSettings();

  if (!settings) {
    throw new Error(
      `Invalid SLP file. Could not find game settings in file: ${file}`
    );
  }

  const latestFrame = game.getLatestFrame();
  const metadata = game.getMetadata();
  //   const playerCodes = settings.players.map(player => player.connectCode);
  //   console.log('player  codes', playerCodes);
  const playerCodes = extractAllPlayerConnectCodes(metadata.players);
  const opponent = playerCodes.find((code) => code !== capitalize(connectCode));
  const winner = settings.players[findWinner(latestFrame)].connectCode ?? null;
  const wonMatch = connectCode.toUpperCase().includes(winner);
  const birthtime = new Date(metadata.startAt);
  const date = dateObj(birthtime);
  const dateDir = [slippiDir, date.year, date.month].join('/');
  const dateStr = [date.year, date.month, date.day, formatAMPM(birthtime)].join(
    '-'
  );
  const playersStr = settings.players
    .map((player) =>
      [
        player.connectCode,
        `[${characters.getCharacterShortName(player.characterId)}]`,
      ].join('')
    )
    .join('_vs_');
  const stage = stageShortName(settings.stageId);
  const fileName = `${dateStr}_${playersStr}-${findWinner(
    latestFrame
  )}-${stage}.slp`;

  return {
    gameId: [...playerCodes, metadata.startAt].join('.'),
    opponent,
    settings,
    players: metadata.players,
    winner: findWinner(latestFrame),
    wonMatch,
    dateDir,
    fileName,
  };
};
