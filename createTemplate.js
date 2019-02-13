const prompt = require('prompt')
const shell = require('shelljs')
const fs = require('fs')
const colors = require('colors/safe')

prompt.message = colors.green('Replace')

module.exports = (args, options, logger) => {
  const variant = options.language || 'default';
  const templatePath = `${__dirname}/templates/${variant}`;
  const localPath = process.cwd()

  if (fs.existsSync(templatePath)) {
    logger.info('Creating scaffolding...')
    shell.mkdir('-p', `${args.kata}`);
    console.log(`${localPath}/${args.kata}`)
    shell.cp('-R', `${templatePath}/*`,`${localPath}/${args.kata}`)
    logger.info('✔ Creation completed!')
  } else {
    logger.error(`The requested template for ${args.kata} wasn’t found.`)
    process.exit(1)
  }

    shell.ls('-Rl', '.').forEach(entry => {
      if (entry.isFile()) {
        shell.sed('-i', `""`, `"${args.kata}"` , entry.name);
      }
    });

  logger.info('✔ Success!')
}
