const inquirer = require('inquirer')
const chalk = require('chalk')


const promptList = [
  {
    type: 'input',
    // message: 'Project name:',
    message: chalk.red('preject'),
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
    default: 'a demo',
  },
  {
    type: 'input',
    message: 'Author:',
    name: 'author',
    default: 'sc'
  }
]

console.log(chalk.blue.bgRed.bold(`
  Welcom to demo cli!
  hahahah
`))

inquirer.prompt(promptList).then(answers => {
  console.log(answers)
})