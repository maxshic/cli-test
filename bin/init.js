#!/usr/bin/env node

const inquirer = require('inquirer')
const chalk = require('chalk')
const execa = require('execa')
const fs = require('fs')
const ejs = require('ejs')
const path = require('path')

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
  // {
  //   type: 'list',
  //   message: 'choose a license',
  //   name: 'license',
  //   choices: ['MIT']
  // },
  {
    type: 'input',
    message: 'Author:',
    name: 'author',
    default: () => getUser()
  }
]

module.exports = function(name){
  // const files = fs.readFileSync('index.js')
  // console.log(files)
  // inquirer.prompt(promptList).then(answers => {
  //   console.log(answers)
  // })
  fs.access('./'+name, fs.constants.F_OK, err => {
    if(err){
      console.log(
        chalk.green('mkdir')
      )
      inquirer.prompt(promptList).then(answers => {
        console.log(__dirname)
        console.log(answers)
        ejs.renderFile(path.resolve(__dirname, 'template', 'package.ejs'), { options: answers } , function(err, str){
          console.log('err', err)
          console.log('str', str)
        })
      })
      
    }else{
      console.log(
        chalk.red('directory exists')
      )
    }
  })
}