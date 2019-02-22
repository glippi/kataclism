#!/usr/bin/env node
'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var shelljs_1 = require('shelljs')
var chalk = require('chalk')
function exitBuildDirectory(path) {
  return path.replace('lib/lib/', '')
}
function setupVariablesName(kataName, options) {
  var templateType = options.t ? 'typescript' : 'javascript'
  var localPath = process.cwd()
  var templatePath = exitBuildDirectory(
    __dirname + '/templates/' + templateType
  )
  var kataPath = exitBuildDirectory(localPath + '/' + kataName)
  return { templatePath: templatePath, kataPath: kataPath }
}
exports.setupVariablesName = setupVariablesName
function createTemplate(kataName, options) {
  var _a = setupVariablesName(kataName, options),
    templatePath = _a.templatePath,
    kataPath = _a.kataPath
  if (shelljs_1.test('-d', kataPath)) {
    console.error('\n')
    console.error(
      chalk.red("Can't create kata project with name: " + kataName + '.')
    )
    console.error('\n')
    console.error(chalk.red("The directory '" + kataName + "' already exist."))
    console.error('\n')
    process.exit(1)
  }
  console.log(chalk.yellow('Scaffolding kata structure...'))
  shelljs_1.mkdir('-p', kataName)
  shelljs_1.cp('-R', '/' + templatePath + '/*', kataPath)
  shelljs_1.cd(kataPath)
  shelljs_1.sed('-i', 'name', kataName, 'package.json')
  shelljs_1.sed('-i', '{{APP_TITLE}}', kataName, 'README.md')
  shelljs_1.exec('yarn')
  console.log(chalk.green('\nKata correctly scaffolded!\n'))
  console.log(chalk.green('You can enter the new created directory typing:\n'))
  console.log(chalk.cyan('\tcd ' + kataName + '\n\n'))
}
exports.createTemplate = createTemplate
