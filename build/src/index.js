#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createTemplate_1 = require("../lib/createTemplate");
var cli = require("cac")();
cli
    .command("create <kata>")
    .action(function (kata, options) {
    createTemplate_1.createTemplate(kata, options);
})
    .option("--t", "Setup for TypeScript");
cli.parse();
