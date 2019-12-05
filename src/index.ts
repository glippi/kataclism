#!/usr/bin/env node
import { createTemplate } from './lib/createTemplate'
import { chooseKata } from './lib/chooseKata'
import { getKatasTitle } from './lib/getKatasList'
import inquirer from 'inquirer'
import cac from 'cac'

const cli = cac()
const allKatas = getKatasTitle()
const isCustomKata = process.argv.length > 2

if (isCustomKata) {
  cli
    .command('create <kata>')
    .option('-t, --typescript', 'Setup for TypeScript')
    .action((kata: string, options: { t?: undefined } | { t: boolean }) => {
      createTemplate(kata, options)
    })

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
      {
        type: 'list',
        name: 'language',
        message: 'Select the language',
        choices: ['javascript', 'typescript'],
      },
    ])
    .then((answers: any) => {
      chooseKata(answers)
    })
}
