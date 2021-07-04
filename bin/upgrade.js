#!/usr/bin/env node

const execa = require('execa');
const chalk = require('chalk');

execa('node', ['-v']).then(result => {
  console.log(result.stdout);
}).catch(err => {
  console.log(
    chalk.red('error!')
  )
})

// console.log('upgrade!!!')