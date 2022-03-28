#!/usr/bin/env node
import inquirer from 'inquirer'
import cac from 'cac'

import { Katas } from './lib/katas'
import { Languages } from './languages'
import { chooseKata } from './lib/chooseKata'
import { createKata } from './lib/createKata'

const cli = cac()
const isCustomKata = process.argv.length > 2

if (isCustomKata) {
  const command = cli.command('create <kata>')

  Languages.commands.forEach(option => {
    command.option(
      `-${option.alias}, --${option.fullAlias}`,
      `Setup for ${option.name}`
    )
  })

  command.action(createKata)
  cli.help()

  try {
    cli.parse()
  } catch (error) {
    command.outputHelp()
  }
} else {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'kata',
        message: 'Select the kata you want to practice',
        choices: Katas.all,
      },
      {
        type: 'list',
        name: 'language',
        message: 'Select the language',
        choices: Languages.choices,
      },
    ])
    .then((answers: any) => {
      chooseKata(answers)
    })
}
