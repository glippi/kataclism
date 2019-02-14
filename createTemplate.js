const prompt = require('prompt')
const shell = require('shelljs')
const fs = require('fs')
const colors = require('colors/safe')

prompt.message = colors.green('Replace')

module.exports = (args, options, logger) => {
  const templateType = options.t ? 'typescript' : 'javascript';
  const templatePath = `${__dirname}/templates/${templateType}`;
  const kataName = args.kata
  const localPath = process.cwd()
  const kataPath = `${localPath}/${kataName}`

  logger.info('Creating scaffolding...')
  shell.mkdir('-p', `${kataName}`);
  shell.cp('-R', `/${templatePath}/*`, kataPath)
  shell.cd(kataPath)
  shell.exec("yarn")
  logger.info('✔ Creation completed!')
}
