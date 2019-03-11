#!/usr/bin/env node
import { exec, sed, mkdir, cd, cp, test, cat } from 'shelljs'
import chalk from 'chalk'

function exitBuildDirectory(path: string): string {
  return path.replace('lib/lib/', '')
}

export function setupVariablesName(kataName: string, options: { t?: boolean }) {
  const templateType = options.t ? 'typescript' : 'javascript'
  const localPath = process.cwd()
  const templatePath = exitBuildDirectory(
    `${__dirname}/templates/${templateType}`
  )
  const kataPath = exitBuildDirectory(`${localPath}/${kataName}`)
  return { templatePath, kataPath }
}

export function createTemplate(
  kataName: string,
  options: {} = {},
  kataDescription = false
) {
  const { templatePath, kataPath } = setupVariablesName(kataName, options)
  const kataDescriptionReadMe = exitBuildDirectory(
    `${__dirname}/src/resources/katas/${kataName}.md`
  )
  const kataDescriptionOrEmptyString = kataDescription
    ? kataDescriptionReadMe
    : ''

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

  console.log(chalk.yellow('Generating kata...'))
  mkdir('-p', kataName)
  cp('-Rf', `/${templatePath}/*`, kataPath)
  cd(kataPath)
  sed('-i', /("name":)(\s)("APP_TITLE")/, `$1 "${kataName}"`, 'package.json')
  sed('-i', '{{APP_TITLE}}', kataName, 'README.md')
  sed('-i', '{{DESCRIPTION}}', cat(kataDescriptionOrEmptyString), 'README.md')
  exec('yarn')
  console.log(chalk.green(`\nSuccess! Created ${kataName} at ${kataPath}\n`))
  console.log(chalk.green(`Start the kata by typing:\n`))
  console.log(chalk.cyan(`\tcd ${kataName}`))
  console.log(chalk.cyan(`\tyarn test\n`))
  console.log(chalk.green(`Happy hacking!`))
}
