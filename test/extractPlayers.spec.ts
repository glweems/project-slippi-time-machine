import { SlippiGame } from '@slippi/slippi-js';
import fs from 'fs';
import _ from 'lodash';
import glob from 'glob';
import { extractPlayers } from '../src/extractPlayers';
import { getSearchPattern } from '../src/util';
it('should correctly return player.playerIndex', () => {
  const files = glob.sync('../slp/*.slp');
  files.forEach((fileName) => {
    const buffer = fs.readFileSync(fileName);
    const game = new SlippiGame(buffer);
    const metadata = game.getMetadata();
    const players = extractPlayers(metadata?.players);

    players.forEach((player) => expect(player.playerIndex).toBeDefined());
  });
});

it('should create the correct glob pattern', () => {
  const recursivePattern = getSearchPattern('../slp', true);
  expect(recursivePattern).toEqual('../slp/**/*.slp');

  const nonRecursivePattern = getSearchPattern('../slp', false);
  expect(nonRecursivePattern).toEqual('../slp/*.slp');
});
