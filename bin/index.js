#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();
const chalk = require('chalk');


program
  .version(require('../package.json').version, '-v, --version');

program
  .command('init <source>', 'init a project' ,{ executableFile: 'init' })
  .action(() => {
    // console.log(
    //   chalk.green('Init project...')
    // )
    console.log(123);
  })

program
  .option('-c, --config <path>', 'set config path')
  .action(() => {
    console.log(
      chalk.green('Config...')
    );
  });



program.parse();

const options = program.opts(process.argv);
console.log('options', options);
// console.log('all', program.args);