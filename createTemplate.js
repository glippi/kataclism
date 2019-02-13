const prompt = require('prompt')
const shell = require('shelljs')
const fs = require('fs')
const colors = require('colors/safe')

// Set prompt as green
prompt.message = colors.green('Replace')

/*
 * Command function
 */

module.exports = (args, options, logger) => {
  const variant = options.language || 'default';
  const templatePath = `${__dirname}/templates/${variant}`;
  const localPath = process.cwd()

  /*
   * Copy Template
   */

  if (fs.existsSync(templatePath)) {
    logger.info('Copying files…')
    shell.mkdir('-p', `${args.template}`);
    console.log(`${localPath}/${args.template}`)
    shell.cp('-R', `${templatePath}/*`,`${localPath}/${args.template}`)
    logger.info('✔ The files have been copied!')
  } else {
    logger.error(`The requested template for ${args.template} wasn’t found.`)
    process.exit(1)
  }

  /*
   * File variables
   */

  // TODO: replace name in package json
  logger.info('✔ Success!')
}
