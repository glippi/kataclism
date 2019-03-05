'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var shelljs_1 = require('shelljs')
function exitBuildDirectory(path) {
  return path.replace('lib/', 'src/')
}
function extractFileName(path) {
  var fileNameWithExtension = path.split('/')[8]
  var fileNameWithoutExtension = fileNameWithExtension.split('.')[0]
  console.log({ path: path })
  console.log({ fileNameWithExtension: fileNameWithExtension })
  console.log({ fileNameWithoutExtension: fileNameWithoutExtension })
  return fileNameWithoutExtension
}
exports.extractFileName = extractFileName
function getKatasList() {
  var katas = []
  var kataclismDirectory = exitBuildDirectory(__dirname)
  shelljs_1.ls(kataclismDirectory + '/*.md').forEach(function(file) {
    katas.push(file)
  })
  var allKatas = katas.map(function(file) {
    return extractFileName(file)
  })
  return allKatas
}
exports.getKatasList = getKatasList
