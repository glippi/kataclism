#!/usr/bin/env node
const prog = require('caporal')
const createCmd = require('./createTemplate')

prog
  .version('1.0.0')
  .command('create', 'Create a new kata')
  .argument('<kata>', 'Name of the kata')
  .option('--l <language>', 'Choose between JavaScript or TypeScript')
  .action(createCmd)

prog.parse(process.argv)
