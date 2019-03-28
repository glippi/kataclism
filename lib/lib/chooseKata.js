'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var createTemplate_1 = require('./createTemplate')
function chooseKata(answers) {
  var kata = answers.kata,
    language = answers.language
  var formatLanguageOption = language === 'javascript' ? {} : { t: true }
  var needKataDescription = true
  createTemplate_1.createTemplate(
    kata,
    formatLanguageOption,
    needKataDescription
  )
}
exports.chooseKata = chooseKata
