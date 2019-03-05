'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var createTemplate_1 = require('./createTemplate')
function chooseKata(answers) {
  var choice = answers.kata
  createTemplate_1.createTemplate(choice, {})
  return choice
}
exports.chooseKata = chooseKata
