#!/usr/bin/env node
const shell = require("shelljs");
const chalk = require("chalk");
import { createPackageJson }  from "./createPackageJson"

export function createTemplate(kata: string, options: boolean) {
 const templateType = options ? "typescript" : "javascript";
 const kataName = kata;
 const localPath = `${process.cwd()}`;
 const templatePath = `${localPath}/templates/${templateType}`;
 const kataPath = `${localPath}/${kataName}`;

 const packageJson = createPackageJson(kataName);

 console.log(chalk.yellow("Scaffolding kata structure..."));
 shell.mkdir("-p", `${kataName}`);
 shell.cp("-R", `${templatePath}/*`, kataPath);
 shell.touch(packageJson, kataPath);
 shell.cd(kataPath);
 shell.exec("yarn");
 console.log(chalk.green(`\nKata correctly scaffolded!\n`));
 console.log(chalk.green(`You can enter the new created directory typing:\n`));
 console.log(chalk.cyan(`\tcd ${kataName}\n\n`));
};
