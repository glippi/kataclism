#!/usr/bin/env node
const scaffoldKata = require("./createTemplate");
const cli = require("cac")();

cli
  .command("create <kata>")
  .action((kata, options) => {
    console.log({ kata, options });
  })
  .option("--t", "Setup for TypeScript");

cli.parse();
