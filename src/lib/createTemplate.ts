#!/usr/bin/env node
import { exec, sed, mkdir, cd, ls, cp, test } from 'shelljs'
const chalk = require('chalk')

function exitBuildDirectory(path: string): string {
  return path.replace('lib/lib/', '')
}

export function setupVariablesName(kataName: string, options: any) {
  const templateType = options.t ? 'typescript' : 'javascript'
  const localPath = process.cwd()
  const templatePath = exitBuildDirectory(
    `${__dirname}/templates/${templateType}`
  )
  const kataPath = exitBuildDirectory(`${localPath}/${kataName}`)
  return { templatePath, kataPath }
}

export function createTemplate(kataName: string, options: any) {
  const { templatePath, kataPath } = setupVariablesName(kataName, options)

  if (test('-d', kataPath)) {
    console.error(`\n`)
    console.error(
      chalk.red(`Can't create kata project with name: ${kataName}.`)
    )
    console.error(`\n`)
    console.error(chalk.red(`The directory '${kataName}' already exist.`))
    console.error(`\n`)
    process.exit(1)
  }

  console.log(chalk.yellow('Scaffolding kata structure...'))
  mkdir('-p', kataName)
  cp('-Rf', `/${templatePath}/*`, kataPath)
  cd(kataPath)
  sed('-i', /("name":)(\s)("APP_TITLE")/, `$1 "${kataName}"`, 'package.json')
  sed('-i', '{{APP_TITLE}}', kataName, 'README.md')
  exec('yarn')
  console.log(chalk.green(`\nKata correctly scaffolded!\n`))
  console.log(chalk.green(`You can enter the new created directory typing:\n`))
  console.log(chalk.cyan(`\tcd ${kataName}\n\n`))
}
