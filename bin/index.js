#!/usr/bin/env node

var program = require("commander");
var welcome = require("../lib/welcome");

var packageJson = require('../package.json');

program.version(packageJson.version)

program
    .command('init <name>')
    .description("init project")
    .action(welcome)

program.parse(process.argv)