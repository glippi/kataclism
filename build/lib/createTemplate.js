#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shelljs_1 = require("shelljs");
var chalk = require("chalk");
var fs = require('fs-extra');
var path = require('path');
var createPackageJson_1 = require("./createPackageJson");
var createReadme_1 = require("./createReadme");
function writePackageJson(dir, contentJson) {
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(contentJson, null, 2));
}
function writeReadme(dir, readMe) {
    fs.writeFileSync(path.join(dir, 'README.md'), readMe);
}
exports.writeReadme = writeReadme;
function exitBuildDirectory(path) {
    return path.replace('build/lib/', '');
}
function setupVariablesName(kataName, options) {
    var templateType = options.t ? "typescript" : "javascript";
    var localPath = process.cwd();
    var templatePath = exitBuildDirectory(__dirname + "/templates/" + templateType);
    var kataPath = exitBuildDirectory(localPath + "/" + kataName);
    var packageJson = createPackageJson_1.createPackageJson(kataName, options.t);
    var readMe = createReadme_1.createReadme(kataName);
    return { templateType: templateType, kataName: kataName, localPath: localPath, templatePath: templatePath, kataPath: kataPath, packageJson: packageJson, readMe: readMe };
}
exports.setupVariablesName = setupVariablesName;
function createTemplate(kata, options) {
    var _a = setupVariablesName(kata, options), templateType = _a.templateType, kataName = _a.kataName, localPath = _a.localPath, templatePath = _a.templatePath, kataPath = _a.kataPath, packageJson = _a.packageJson, readMe = _a.readMe;
    if (fs.existsSync(kataPath)) {
        console.error("\n");
        console.error(chalk.red("Can't create kata project wiht name: " + kataName + "."));
        console.error("\n");
        console.error(chalk.red("The directory '" + kataName + "' already exist."));
        console.error("\n");
        process.exit(1);
    }
    console.log(chalk.yellow("Scaffolding kata structure..."));
    shelljs_1.mkdir("-p", "" + kataName);
    shelljs_1.cp("-R", "/" + templatePath + "/*", kataPath);
    writeReadme(kataPath, readMe);
    shelljs_1.cd(kataPath);
    shelljs_1.sed('-i', 'name', kataName, 'package.json');
    shelljs_1.exec("yarn");
    console.log(chalk.green("\nKata correctly scaffolded!\n"));
    console.log(chalk.green("You can enter the new created directory typing:\n"));
    console.log(chalk.cyan("\tcd " + kataName + "\n\n"));
}
exports.createTemplate = createTemplate;
;
