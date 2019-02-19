#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shell = require("shelljs");
var chalk = require("chalk");
var createPackageJson_1 = require("./createPackageJson");
function createTemplate(kata, options) {
    var templateType = options ? "typescript" : "javascript";
    var kataName = kata;
    var localPath = "" + process.cwd();
    var templatePath = localPath + "/templates/" + templateType;
    var kataPath = localPath + "/" + kataName;
    var packageJson = createPackageJson_1.createPackageJson(kataName);
    console.log(chalk.yellow("Scaffolding kata structure..."));
    shell.mkdir("-p", "" + kataName);
    shell.cp("-R", templatePath + "/*", kataPath);
    shell.touch(packageJson, kataPath);
    shell.cd(kataPath);
    shell.exec("yarn");
    console.log(chalk.green("\nKata correctly scaffolded!\n"));
    console.log(chalk.green("You can enter the new created directory typing:\n"));
    console.log(chalk.cyan("\tcd " + kataName + "\n\n"));
}
exports.createTemplate = createTemplate;
;
