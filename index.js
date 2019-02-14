#!/usr/bin/env node
const prog = require('caporal')
const scaffoldKata= require('./createTemplate')

prog
  .version('1.0.0')
  .command('create', 'Create a new kata')
  .argument('<kata>', 'Name of the kata')
  .option('--t', 'Setup kata with TypeScript', prog.BOOLEAN)
  .action(scaffoldKata)

prog.parse(process.argv)
