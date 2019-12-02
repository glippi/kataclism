import { exec, sed, mkdir, cd, cp, test, cat } from 'shelljs'
import chalk from 'chalk'
import path from 'path'

export const KATACLISM_ROOT_DIRECTORY = path.join(__dirname, '../../')

export function setupVariablesName(kataName: string, options: { t?: boolean }) {
  const templateType = options.t ? 'typescript' : 'javascript'
  const templatePath = `${KATACLISM_ROOT_DIRECTORY}templates/${templateType}`
  const kataPath = `${KATACLISM_ROOT_DIRECTORY}${kataName}`
  return { kataPath, templatePath }
}

export function createTemplate(
  kataName: string,
  options: {} = {},
  kataDescription = false
) {
  const { templatePath, kataPath } = setupVariablesName(kataName, options)

  const kataDescriptionReadMe = `${KATACLISM_ROOT_DIRECTORY}src/katasReadme/${kataName}.md`

  const kataDescriptionOrEmptyString = kataDescription
    ? cat(kataDescriptionReadMe)
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
