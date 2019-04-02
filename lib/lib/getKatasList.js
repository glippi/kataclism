"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shelljs_1 = require("shelljs");
function extractFileName(path) {
    var fileName = path.replace(/^.+\//, '');
    var fileNameWithoutExtension = fileName.replace(/\.md/, '');
    return fileNameWithoutExtension;
}
exports.extractFileName = extractFileName;
function getKatasList() {
    var katas = [];
    var kataclismDirectory = process.cwd();
    shelljs_1.ls(kataclismDirectory + "/src/katasReadme/*.md").forEach(function (file) {
        katas.push(file);
    });
    var allKatas = katas.map(function (file) { return extractFileName(file); });
    return allKatas;
}
exports.getKatasList = getKatasList;
