import { Command } from 'commander';
import fs from 'fs-extra';

import { readPackageJson } from './util';

const packageJson = readPackageJson();
// import { s } from './sort';

const configExists = fs.existsSync('config.json');
if (!configExists) {
  fs.writeJSONSync('config.json', {
    connectCode: '',
    slippiDir: '',
  });
}
const program = new Command();
program
  .command('init')
  .description('Initialize the directory structure')
  .action(() => {});

program.version(packageJson.version);
program
  .command('sort')
  .description('Organize slippi files into folders by date')
  .option(
    '-d, --directory <dir>',
    'The directory to search for slippi files',
    fs.readJSONSync('config.json').slippiDir
  )
  .option(
    '-c, --connect-code <code>',
    'The connect code to use for sorting',
    fs.readJSONSync('config.json').connectCode
  )
  .option('-r, --recursive', 'recursively search directories', true)
  .action((options) => {
    // sort(options.directory, options.connectCode, options.recursive);
  });
program.parse();
