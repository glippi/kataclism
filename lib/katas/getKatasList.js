'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var shelljs_1 = require('shelljs')
function extractFileName(path) {
  var fileNameWithExtension = path.split('/')[2]
  var fileNameWithoutExtension = fileNameWithExtension.split('.')[0]
  return fileNameWithoutExtension
}
exports.extractFileName = extractFileName
function getKatasList() {
  var katas = []
  shelljs_1.ls('./katas/*.md').forEach(function(file) {
    katas.push(file)
  })
  var allKatas = katas.map(function(file) {
    return extractFileName(file)
  })
  return allKatas
}
exports.getKatasList = getKatasList
