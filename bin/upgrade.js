#!/usr/bin/env node

const execa = require('execa');
const chalk = require('chalk');
const Listr = require('listr');

new Listr([
  {
    title: 'check current cli version',
    task: (ctx, task) => execa('npm', ['view', 'aohua-cli', 'versions']).then(result => {
        const res = result.stdout.replace(/\s|\[|\]|\'/g, '').split(',').sort()
        if(res[res.length-1] !== require('../package.json').version){
          ctx.up = true
        }else{
          ctx.up = false
          task.skip('your cli version is uptodate')
        }
      }).catch(() => {
        ctx.up = false
        task.skip('npm error')
      })
  },
  {
    title: 'upgrade cli version',
    enabled: ctx => ctx.up === true,
    task: () => execa('yarn', ['-v'])
  }
]).run().catch(err => {
  console.log(err)
})