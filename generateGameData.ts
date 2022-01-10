import type { SlippiGame } from '@slippi/slippi-js';
import { capitalize } from 'lodash';

import { extractAllPlayerConnectCodes } from './matchNames';
import { findWinnerIndex } from './util';

export const generateGameData = (
  fileName: string,
  game: SlippiGame,
  connectCode?: string
) => {
  // For a valid SLP game, at the very least we should have valid settings
  const settings = game?.getSettings();

  if (!settings) {
    throw new Error(
      `Invalid SLP file. Could not find game settings in file: ${fileName}`
    );
  }

  const latestFrame = game.getLatestFrame();
  const metadata = game.getMetadata();
  const playerCodes = extractAllPlayerConnectCodes(metadata.players);
  const opponent = playerCodes.find((code) => code !== capitalize(connectCode));
  const winner = settings.players[findWinner(latestFrame)].connectCode ?? null;
  const wonMatch = winner === connectCode.toUpperCase();
  return {
    gameId: [...playerCodes, metadata.startAt].join('.'),
    opponent,
    playerCodes,
    settings,
    latestFrame,
    gameEnd: game.getGameEnd(),
    metadata,
    stats: game.getStats(),
    players: metadata.players,
    winner: findWinner(latestFrame),
    wonMatch,
  };
};
