#!/usr/bin/env node
import { createTemplate } from './lib/createTemplate'
import { chooseKata } from './lib/chooseKata'
const cli = require('cac')()
const inquirer = require('inquirer')
import { Answers } from 'inquirer'

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
        type: 'list',
        name: 'kata',
        message: 'Which is better?',
        choices: ['bowling-kata', 'bank-kata', 'fizz-buzz-kata'],
      },
    ])
    .then((answers: Answers) => {
      console.info('Answer:', answers.kata)
      chooseKata(answers)
    })
}
