#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("shelljs");
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
function exitBuildDirectory(path) {
    return path.replace('build/lib/', '');
}
function createTemplate(kata, options) {
    var templateType = options.t ? "typescript" : "javascript";
    var kataName = kata;
    var localPath = process.cwd();
    var templatePath = exitBuildDirectory(__dirname + "/templates/" + templateType);
    var kataPath = exitBuildDirectory(localPath + "/" + kataName);
    var packageJson = createPackageJson_1.createPackageJson(kataName, options.t);
    var readMe = createReadme_1.createReadme(kataName);
    if (fs.existsSync(kataPath)) {
        console.error("\n");
        console.error(chalk.red("Can't create kata project wiht name: " + kataName + "."));
        console.error("\n");
        console.error(chalk.red("The directory '" + kataName + "' already exist."));
        console.error("\n");
        process.exit(1);
    }
    console.log(chalk.yellow("Scaffolding kata structure..."));
    shell.mkdir("-p", "" + kataName);
    //fs.mkdirSync(
    shell.cp("-R", "/" + templatePath + "/*", kataPath);
    writePackageJson(kataPath, packageJson);
    writeReadme(kataPath, readMe);
    shell.cd(kataPath);
    shell.exec("yarn");
    console.log(chalk.green("\nKata correctly scaffolded!\n"));
    console.log(chalk.green("You can enter the new created directory typing:\n"));
    console.log(chalk.cyan("\tcd " + kataName + "\n\n"));
}
exports.createTemplate = createTemplate;
;
