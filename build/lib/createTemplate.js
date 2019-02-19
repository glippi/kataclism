#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("shelljs");
var chalk = require("chalk");
var fs = require('fs-extra');
var path = require('path');
var createPackageJson_1 = require("./createPackageJson");
function writePackageJson(dir, contentJson) {
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(contentJson, null, 2));
}
function createTemplate(kata, options) {
    var templateType = options.t ? "typescript" : "javascript";
    console.log({ templateType: templateType });
    var kataName = kata;
    var localPath = "" + process.cwd();
    var templatePath = localPath + "/templates/" + templateType;
    var kataPath = localPath + "/" + kataName;
    var packageJson = createPackageJson_1.createPackageJson(kataName);
    console.log(chalk.yellow("Scaffolding kata structure..."));
    shell.mkdir("-p", "" + kataName);
    shell.cp("-R", templatePath + "/*", kataPath);
    writePackageJson(kataPath, packageJson);
    shell.cd(kataPath);
    shell.exec("yarn");
    console.log(chalk.green("\nKata correctly scaffolded!\n"));
    console.log(chalk.green("You can enter the new created directory typing:\n"));
    console.log(chalk.cyan("\tcd " + kataName + "\n\n"));
}
exports.createTemplate = createTemplate;
;
