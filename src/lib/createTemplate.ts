import { exec, sed, mkdir, cd, cp, test } from 'shelljs'
import chalk from 'chalk'
import { getKataDescription } from './getKatasList'
import { KATACLISM_ROOT_DIRECTORY } from '../constants'

export function createTemplate(
  kataName: string,
  options: { t?: undefined } | { t: boolean },
  kataDescription = false
) {
  const templateType = options.t ? 'typescript' : 'javascript'
  const templatePath = `${KATACLISM_ROOT_DIRECTORY}templates/${templateType}`
  const kataPath = `${process.cwd()}/${kataName}`

  const kataDescriptionOrEmptyString = kataDescription
    ? getKataDescription(kataName)
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

  console.log(chalk.yellow('Generating kata folders...'))
  mkdir('-p', kataName)
  cp('-Rf', `/${templatePath}/*`, kataPath)
  cd(kataPath)
  sed('-i', /("name":)(\s)("app_title")/, `$1 "${kataName}"`, 'package.json')
  sed('-i', '{{app_title}}', kataName, 'README.md')
  sed('-i', '{{description}}', kataDescriptionOrEmptyString, 'README.md')
  exec('npm install')
  console.log(chalk.green(`\nSuccess! Created ${kataName} at ${kataPath}\n`))
  console.log(chalk.green(`Start the kata by typing:\n`))
  console.log(chalk.cyan(`\tcd ${kataName}`))
  console.log(chalk.cyan(`\tnpm run test:watch\n`))
  console.log(chalk.green(`Happy hacking!`))
}
