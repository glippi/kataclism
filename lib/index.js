#!/usr/bin/env node
'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var createTemplate_1 = require('./lib/createTemplate')
var chooseKata_1 = require('./lib/chooseKata')
var inquirer_1 = __importDefault(require('inquirer'))
var getKatasList_1 = require('./resources/katas/getKatasList')
var cac_1 = __importDefault(require('cac'))
var cli = cac_1.default()
var allKatas = getKatasList_1.getKatasList()
var isCustomKata = process.argv.length > 2
if (isCustomKata) {
  cli
    .command('create <kata>')
    .action(function(kata, options) {
      createTemplate_1.createTemplate(kata, options)
    })
    .option('-t, --typescript', 'Setup for TypeScript')
  cli.parse()
} else {
  inquirer_1.default
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
    .then(function(answers) {
      chooseKata_1.chooseKata(answers)
    })
}
