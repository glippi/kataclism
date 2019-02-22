#!/usr/bin/env node
import { createTemplate } from './lib/createTemplate'
const cli = require('cac')()
const inquirer = require('inquirer')

if (process.argv.length > 2) {
  cli
    .command('create <kata>')
    .action((kata: string, options: boolean) => {
      createTemplate(kata, options)
    })
    .option('-t, --typescript', 'Setup for TypeScript')

  cli.parse()
} else {
  inquirer
    .prompt([
      {
        type: 'rawlist',
        name: 'reptile',
        message: 'Which is better?',
        choices: ['alligator', 'crocodile'],
      },
    ])
    .then((answers: any) => {
      console.info('Answer:', answers.reptile)
    })
}
