#!/usr/bin/env node
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var createTemplate_1 = require('./lib/createTemplate')
var cli = require('cac')()
var inquirer = require('inquirer')
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
        type: 'rawlist',
        name: 'reptile',
        message: 'Which is better?',
        choices: ['alligator', 'crocodile'],
      },
    ])
    .then(function(answers) {
      console.info('Answer:', answers.reptile)
    })
}
