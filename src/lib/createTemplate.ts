import { exec, sed, mkdir, cd, cp, test } from 'shelljs'
import chalk from 'chalk'
import { KATACLISM_ROOT_DIRECTORY } from '../constants'
import { KataTemplate } from '../kata'

export const createTemplate = (kata: KataTemplate) => {
  const { name: kataName, description: kataDescription, language } = kata

  const templatePath = `${KATACLISM_ROOT_DIRECTORY}templates/${language.path}`
  const kataPath = `${process.cwd()}/${kataName}`

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
  cp('-rf', `${templatePath}/*`, kataPath)
  cp('-rf', `${templatePath}/.gitignore`, `${kataPath}/.gitignore`)
  cd(kataPath)
  console.log(chalk.green(`\nCreating ${kataName} at ${kataPath}`))
  sed('-i', /("name":)(\s)("app_title")/, `$1 "${kataName}"`, 'package.json')
  sed('-i', '{{app_title}}', kataName, 'README.md')
  sed('-i', '{{description}}', kataDescription, 'README.md')

  exec('git init -q')

  console.log(chalk.green(`\nInstalling dependencies for ${kataName}`))

  exec(language.installDependencies)
  console.log(chalk.green(`\nSuccess! Created ${kataName} at ${kataPath}\n`))
  console.log(chalk.green(`Start the kata by typing:\n`))
  console.log(chalk.cyan(`\tcd ${kataName}`))
  console.log(chalk.cyan(`\t${language.commandForTest}\n`))
  console.log(chalk.green(`Happy hacking!`))
}
