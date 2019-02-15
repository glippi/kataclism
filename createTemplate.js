const prompt = require("prompt");
const shell = require("shelljs");
const fs = require("fs");
const colors = require("colors/safe");
const chalk = require("chalk");

prompt.message = colors.green("Replace");

module.exports = (args, options, logger) => {
  const templateType = options.t ? "typescript" : "javascript";
  const templatePath = `${__dirname}/templates/${templateType}`;
  const kataName = args.kata;
  const localPath = process.cwd();
  const kataPath = `${localPath}/${kataName}`;

  chalk.yellow("Scaffolding kata structure...");
  shell.mkdir("-p", `${kataName}`);
  shell.cp("-R", `/${templatePath}/*`, kataPath);
  shell.cd(kataPath);
  shell.exec("yarn");
  chalk.green(
    `Kata correctly scaffolded!. \n You can enter the new created directory typing: \n cd ${kataPath}`
  );
};
