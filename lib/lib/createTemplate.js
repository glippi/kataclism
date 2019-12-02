'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var shelljs_1 = require('shelljs')
var chalk_1 = __importDefault(require('chalk'))
var path_1 = __importDefault(require('path'))
exports.KATACLISM_ROOT_DIRECTORY = path_1.default.join(__dirname, '../../')
function setupVariablesName(kataName, options) {
  var templateType = options.t ? 'typescript' : 'javascript'
  var templatePath =
    exports.KATACLISM_ROOT_DIRECTORY + 'templates/' + templateType
  var kataPath = '' + exports.KATACLISM_ROOT_DIRECTORY + kataName
  return { kataPath: kataPath, templatePath: templatePath }
}
exports.setupVariablesName = setupVariablesName
function createTemplate(kataName, options, kataDescription) {
  if (options === void 0) {
    options = {}
  }
  if (kataDescription === void 0) {
    kataDescription = false
  }
  var _a = setupVariablesName(kataName, options),
    templatePath = _a.templatePath,
    kataPath = _a.kataPath
  var kataDescriptionReadMe =
    exports.KATACLISM_ROOT_DIRECTORY + 'src/katasReadme/' + kataName + '.md'
  var kataDescriptionOrEmptyString = kataDescription
    ? shelljs_1.cat(kataDescriptionReadMe)
    : ''
  if (shelljs_1.test('-d', kataPath)) {
    console.error('\n')
    console.error(
      chalk_1.default.red(
        "Can't create kata project with name: " + kataName + '.'
      )
    )
    console.error('\n')
    console.error(
      chalk_1.default.red("The directory '" + kataName + "' already exist.")
    )
    console.error('\n')
    process.exit(1)
  }
  console.log(chalk_1.default.yellow('Generating kata...'))
  shelljs_1.mkdir('-p', kataName)
  shelljs_1.cp('-Rf', '/' + templatePath + '/*', kataPath)
  shelljs_1.cd(kataPath)
  shelljs_1.sed(
    '-i',
    /("name":)(\s)("APP_TITLE")/,
    '$1 "' + kataName + '"',
    'package.json'
  )
  shelljs_1.sed('-i', '{{APP_TITLE}}', kataName, 'README.md')
  shelljs_1.sed(
    '-i',
    '{{DESCRIPTION}}',
    kataDescriptionOrEmptyString,
    'README.md'
  )
  shelljs_1.exec('yarn')
  console.log(
    chalk_1.default.green(
      '\nSuccess! Created ' + kataName + ' at ' + kataPath + '\n'
    )
  )
  console.log(chalk_1.default.green('Start the kata by typing:\n'))
  console.log(chalk_1.default.cyan('\tcd ' + kataName))
  console.log(chalk_1.default.cyan('\tyarn test\n'))
  console.log(chalk_1.default.green('Happy hacking!'))
}
exports.createTemplate = createTemplate
