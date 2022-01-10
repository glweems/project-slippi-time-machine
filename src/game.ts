import { characters, FrameEntryType, MetadataType, PlayerType, SlippiGame } from '@slippi/slippi-js';
import _ from 'lodash';
import type { GameData } from './types';
export interface Names {
  netplay: string;
  code: string;
}
export interface PlayerValue {
  names: Names;
  characters: { [key: string]: number };
}
const getPlayerPorts = (players: { [key: string]: PlayerType }) => players && Object.keys(players);

/* const getPlayerData = (players: MetadataType['players'], port: string) => {
  const player = players?.[port];
  return player;
};
 */
// const getPlayersData = players => Object.entries(players).map((key, val) => getPlayerData(val as any, key as any));

export const generateGameData = (name: string, game: SlippiGame) => {
  // For a valid SLP game, at the very least we should have valid settings
  const settings = game?.getSettings();

  if (!settings) {
    throw new Error(`Invalid SLP file. Could not find game settings in file: ${name}`);
  }

  const latestFrame = game.getLatestFrame();
  const metadata = game.getMetadata();

  return {
    gameId: `${name}.${metadata?.startAt}`,
    filePath: name,
    settings,
    latestFrame,
    stats: game.getStats(),
    gameEnd: game.getGameEnd(),
    metadata: game.getMetadata(),
    // players,
    // frames: game.getFrames(),
  };
};
/*
export const findWinner = (lastFrame: FrameEntryType | null): number | null => {
  if (lastFrame === null) {
    return null;
  }

  const postFrameEntries = Object.keys(lastFrame.players).map(i => {
    return lastFrame?.players[i].post;
  });

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
 */
