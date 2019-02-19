#!/usr/bin/env node
const shell = require("shelljs");
const chalk = require("chalk");
const fs = require('fs-extra')
const path = require('path')
import { createPackageJson }  from "./createPackageJson"

function writePackageJson(dir: string, contentJson: any) {
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(contentJson, null, 2))
}

export function createTemplate(kata: string, options: any) {
 const templateType = options.t ? "typescript" : "javascript";
 const kataName = kata;
 const localPath = `${process.cwd()}`;
 const templatePath = `${localPath}/templates/${templateType}`;
 const kataPath = `${localPath}/${kataName}`;

 const packageJson = createPackageJson(kataName);

 console.log(chalk.yellow("Scaffolding kata structure..."));
 shell.mkdir("-p", `${kataName}`);
 shell.cp("-R", `${templatePath}/*`, kataPath);
 writePackageJson(kataPath, packageJson)
 shell.cd(kataPath);
 shell.exec("yarn");
 console.log(chalk.green(`\nKata correctly scaffolded!\n`));
 console.log(chalk.green(`You can enter the new created directory typing:\n`));
 console.log(chalk.cyan(`\tcd ${kataName}\n\n`));
};
