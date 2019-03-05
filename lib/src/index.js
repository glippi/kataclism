#!/usr/bin/env node
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var createTemplate_1 = require('./lib/createTemplate')
var chooseKata_1 = require('./lib/chooseKata')
var cli = require('cac')()
var inquirer = require('inquirer')
var getKatasList_1 = require('../katas/getKatasList')
var allKatas = getKatasList_1.getKatasList()
if (process.argv.length > 2) {
  cli
    .command('create <kata>')
    .action(function(kata, options) {
      createTemplate_1.createTemplate(kata, options)
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
        choices: allKatas,
      },
    ])
    .then(function(answers) {
      console.info('Answer:', answers.kata)
      chooseKata_1.chooseKata(answers)
    })
}
