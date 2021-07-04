#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const chalk = require('chalk');

program
  .passThroughOptions(true)

program
  .name('aohua')
  .version(require('../package.json').version, '-v, --version')
  .description(
    chalk.green(
      `Welcom to aohua-cli!`
    )
  )
  .option('-l, --list', 'list avaliable project template')
  .action(() => {
    console.log(
      chalk.green('Config...')
    );
  });


program
  .command('init', 'init a project' ,{ executableFile: 'init' })
  .action(() => {
    console.log(
      chalk.green('Init project...')
    )
  })

program
  .command('upgrade', 'upgrade cli', { executableFile: 'upgrade' })
  .action(options => {
    console.log(
      chalk.green(1234)
    )
  })

program.parse(process.argv);

const options = program.opts(process.argv);
console.log('options', options);
console.log('all', program.args);