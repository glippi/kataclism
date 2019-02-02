const cli = require('cac')()

cli
  .command('kataclism <name>', 'Create a new scaffolding for kata')
  .option('--l [language]', 'Choose the language')
  .action((name, options) => {
    console.log({ name, options })
  })

// Display help message when `-h` or `--help` appears
cli.help()
// Display version number when `-v` or `--version` appears
// It's also used in help message
cli.version('0.0.0')

cli.parse()

const parsed = cli.parse()

console.log(JSON.stringify(parsed, null, 2))
