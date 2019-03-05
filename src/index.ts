#!/usr/bin/env node
import { createTemplate } from './lib/createTemplate'
import { chooseKata } from './lib/chooseKata'
import inquirer from 'inquirer'
import { Answers } from 'inquirer'
import { getKatasList } from './resources/katas/getKatasList'
import cac from 'cac'

const cli = cac()
const allKatas = getKatasList()
const isCustomKata = process.argv.length > 2

if (isCustomKata) {
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
        message: 'Select the kata you want to practice',
        choices: allKatas,
      },
    ])
    .then((answers: Answers) => {
      console.info('Answer:', answers.kata)
      chooseKata(answers)
    })
}
