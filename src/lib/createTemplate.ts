import { exec, sed, mkdir, cd, cp, test, cat } from 'shelljs'
import chalk from 'chalk'

const kataclismDirectory = process.cwd()

export function setupVariablesName(kataName: string, options: { t?: boolean }) {
  const templateType = options.t ? 'typescript' : 'javascript'
  const templatePath = `${kataclismDirectory}/templates/${templateType}`
  const kataPath = `${kataclismDirectory}/${kataName}`
  return { templatePath, kataPath }
}

export function createTemplate(
  kataName: string,
  options: {} = {},
  kataDescription = false
) {
  const { templatePath, kataPath } = setupVariablesName(kataName, options)

  const kataDescriptionReadMe = `${kataclismDirectory}/src/katasReadme/${kataName}.md`

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

  console.log(chalk.yellow('Generating kata...'))
  mkdir('-p', kataName)
  cp('-Rf', `/${templatePath}/*`, kataPath)
  cd(kataPath)
  sed('-i', /("name":)(\s)("APP_TITLE")/, `$1 "${kataName}"`, 'package.json')
  sed('-i', '{{APP_TITLE}}', kataName, 'README.md')
  sed('-i', '{{DESCRIPTION}}', kataDescriptionOrEmptyString, 'README.md')
  exec('yarn')
  console.log(chalk.green(`\nSuccess! Created ${kataName} at ${kataPath}\n`))
  console.log(chalk.green(`Start the kata by typing:\n`))
  console.log(chalk.cyan(`\tcd ${kataName}`))
  console.log(chalk.cyan(`\tyarn test\n`))
  console.log(chalk.green(`Happy hacking!`))
}
