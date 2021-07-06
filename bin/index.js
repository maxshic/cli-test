#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const chalk = require('chalk');

program
  .passThroughOptions(true)

program
  .name('aohua')
  .version(require('../package.json').version, '-v, --version')
  // .description(
  //   chalk.green(
  //     `Welcom to aohua-cli!`
  //   )
  // )
  .option('-l, --list', 'list avaliable project template')
  .action(() => {
    console.log(
      chalk.green('Config...')
    );
  });


program
  .command('init <name>')
  .description('init a project')
  .action(options => {
    console.log(
      chalk.green('Init project...')
    )
    require('./init.js')(options)
  })

program
  .command('upgrade')
  .description('upgrade cli')
  .action(options => {
    console.log(
      chalk.green('  upgrading...')
    )
    require('./upgrade.js')
  })

program.parse(process.argv);

const options = program.opts(process.argv);
// console.log('options', options);
// console.log('all', program.args);