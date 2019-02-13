#!/usr/bin/env node
const prog = require('caporal')
const createCmd = require('./createTemplate')

prog
  .version('1.0.0')
  .command('create', 'Create a new application')
  .argument('<template>', 'Template to use')
  .option('--l <language>', 'Choose between JavaScript and TypeScript')
  .action(createCmd)

prog.parse(process.argv)
