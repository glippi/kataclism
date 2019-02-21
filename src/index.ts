#!/usr/bin/env node
import { createTemplate } from './lib/createTemplate'
const cli = require('cac')()

cli
  .command('create <kata>')
  .action((kata: string, options: boolean) => {
    createTemplate(kata, options)
  })
  .option('-t, --typescript', 'Setup for TypeScript')

cli.parse()
