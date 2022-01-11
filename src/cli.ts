import { exec } from 'child_process';
import { Command } from 'commander';
import fs from 'fs-extra';
import _ from 'lodash';
import type { PromptObject } from 'prompts';
import prompts from 'prompts';
import prompt from 'prompts';
import { sortPromptQuestions } from './prompts';
import { readPackageJson } from './util';

const packageJson = fs.readJSONSync('./package.json');
// import { s } from './sort';
const configExists =
  fs.existsSync('./slippi.json') &&
  fs.readFileSync('./slippi.json').toString() !== '{}';

const program = new Command();
// const init = async () => {};

if (!configExists) exec('node src/cli.js init');

const config = configExists && fs.readJSONSync('./slippi.json');
program.version(packageJson.version);
program
  .command('sort')
  .option('-r, --recursive', 'Recursively sort all subdirectories', true)
  .option('-c, --connect-code', 'Slippi Connect Code', config.connectCode)
  .action(async (options) => {
    const opts = await prompts(sortPromptQuestions);
    console.log(opts);
  });

program.command('init').action(async () => {
  const config = await fs.readFile('./slippi.json');

  const questions: Array<
    PromptObject<'recursive' | 'slippiDir' | 'filterShortGames' | 'hrFormat'>
  > = [
    // slippiDirPrompt,
    {
      type: 'toggle',
      name: 'recursive',
      message: 'Recursively search directories?',
      initial: configExists ? _.get(config, 'recursive') : true,
    },
    {
      type: 'toggle',
      name: 'filterShortGames',
      message: 'Filter short games?',
      initial: true,
    },
    {
      type: 'select',
      name: 'hrFormat',
      message: 'Select the time format',
      choices: [
        { title: '24 hour', value: '24' },
        { title: '12 hour', value: '12' },
      ],
    },
  ];
  const answers = await prompt(questions);
  packageJson.slippi = answers;
  fs.writeFileSync('slippi.json', JSON.stringify(answers, null, 2));
});

program.parse(process.argv);
