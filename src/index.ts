#!/usr/bin/env node
import { chooseKata } from './lib/chooseKata'
import { getKatasTitle } from './lib/getKatasList'
import inquirer from 'inquirer'
import cac from 'cac'
import { supportedLanguages } from './languages'
import { createKata } from './lib/createKata'

const cli = cac()
const allKatas = getKatasTitle()
const isCustomKata = process.argv.length > 2

if (isCustomKata) {
  cli
    .command('create <kata>')
    .option('-j, --javascript', 'Setup for Javascript')
    .option('-t, --typescript', 'Setup for TypeScript')
    .option('-n, --netcore', 'Setup for Netcore')
    .action(createKata)

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
        choices: Object.keys(supportedLanguages),
      },
    ])
    .then((answers: any) => {
      chooseKata(answers)
    })
}
