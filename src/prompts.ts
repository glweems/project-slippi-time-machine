import fs from 'fs-extra';
import { get } from 'lodash';
import { PromptObject } from 'prompts';
import { SortSlippiDirOpts } from '../sortSlippiFiles';
const slippiConfig = fs.readFileSync('./slippi.json');

const sortPropts: Record<string, PromptObject<keyof SortSlippiDirOpts>> = {
  slippiDir: {
    type: 'text',
    name: 'slippiDir',
    message: 'Enter the directory where your slippi files are located',
    initial: get(slippiConfig, 'slippiDir'),
  },
  connectCode: {
    type: 'text',
    name: 'connectCode',
    message: 'Enter the connect code for your slippi files',
    initial: get(slippiConfig, 'connectCode'),
  },
  recursive: {
    type: 'toggle',
    name: 'recursive',
    message: 'Recursively search directories?',
    initial: true,
  },
  sortBy: {
    type: 'multiselect',
    name: 'sortBy',
    message: 'Select the sort option',
    choices: [
      { title: 'Year', value: 'year' },
      { title: 'Month', value: 'month' },
      { title: 'Day', value: 'day' },
      { title: 'Player', value: 'player' },
      { title: 'Stage', value: 'stage' },
      { title: 'Win-Loss', value: 'win-loss' },
    ],
  },
  filterShortGames: {
    type: 'toggle',
    name: 'filterShortGames',
    message: 'Filter short games?',
    initial: true,
  },
  hrFormat: {
    type: 'select',
    name: 'hrFormat',
    message: 'Select the time format',
    choices: [
      { title: '24 hour', value: '24' },
      { title: '12 hour', value: '12' },
    ],
  },
};

export const sortPromptQuestions = Object.values(sortPropts);
