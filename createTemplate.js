const prompt = require('prompt')
const shell = require('shelljs')
const fs = require('fs')
const colors = require('colors/safe')

prompt.message = colors.green('Replace')

module.exports = (args, options, logger) => {
  const variant = options.t ? 'typescript' : 'javascript';
  const templatePath = `${__dirname}/templates/${variant}`;
  const localPath = process.cwd()

  if (fs.existsSync(templatePath)) {
    logger.info('Creating scaffolding...')
    shell.mkdir('-p', `${args.kata}`);
    shell.cp('-R', `${templatePath}/*`,`${localPath}/${args.kata}`)
    shell.cd(`${localPath}/${args.kata}`)
    shell.exec("yarn")
    logger.info('✔ Creation completed!')
  } else {
    logger.error(`The requested template for ${args.kata} wasn’t found.`)
    process.exit(1)
  }
}
