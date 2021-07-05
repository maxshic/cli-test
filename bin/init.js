#!/usr/bin/env node

const inquirer = require('inquirer')
const chalk = require('chalk')
const execa = require('execa')

const getUser = async function(){
  let s = ''
  await execa('npm', ['whoami']).then(res => {
    s = res.stdout
  }).catch(() => s = '')
  return s
}

const promptList = [
  {
    type: 'input',
    message: 'Project name:',
    // message: chalk.red('preject'),
    name: 'name',
    default: "demo"
  },
  {
    type: 'input',
    message: 'Version:',
    name: 'version',
    default: '1.0.0'
  },
  {
    type: 'input',
    message: 'Description:',
    name: 'description',
    default: 'Some description',
  },
  {
    type: 'input',
    message: 'Author:',
    name: 'author',
    default: () => getUser()
  }
]

// console.log(chalk.blue.bgRed.bold(`
//   Welcom to demo cli!
//   hahahah
// `))

// const execa = require('execa')
// execa('npm', ['view', 'aohua-cli', 'versions']).then(result => {
//   const res =  result.stdout.replace(/\s|\[|\]|\'/g, '').split(',').sort()
//   console.log('res', res[0])
//   console.log('cur', require('../package.json').version)
// }).catch(err => console.log('err'))

inquirer.prompt(promptList).then(answers => {
  console.log(answers)
})