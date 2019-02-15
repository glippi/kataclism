const shell = require("shelljs");
const chalk = require("chalk");

module.exports = (args, options, logger) => {
  const templateType = options.t ? "typescript" : "javascript";
  const templatePath = `${__dirname}/templates/${templateType}`;
  const kataName = args.kata;
  const localPath = process.cwd();
  const kataPath = `${localPath}/${kataName}`;

  console.log(chalk.yellow("Scaffolding kata structure..."));
  shell.mkdir("-p", `${kataName}`);
  shell.cp("-R", `/${templatePath}/*`, kataPath);
  shell.cd(kataPath);
  shell.exec("yarn");
  console.log(chalk.green(`\nKata correctly scaffolded!\n`));
  console.log(chalk.green(`You can enter the new created directory typing:\n`));
  console.log(chalk.cyan(`\tcd ${kataName}\n\n`));
};
