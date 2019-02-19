"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shelljs_1 = require("shelljs");
var createPackageJson_1 = require("../lib/createPackageJson");
var envConstants_1 = require("./envConstants");
beforeEach(function () {
    shelljs_1.exec(envConstants_1.KATACLISM + " create " + envConstants_1.KATADIRECTORY);
});
afterEach(function () {
    shelljs_1.rm("-rf", envConstants_1.KATADIRECTORY);
});
test("Create a directory with the name of the kata", function () {
    var allDirectories = shelljs_1.ls();
    expect(allDirectories).toContain(envConstants_1.KATADIRECTORY);
});
test("Copy all files from template/javascript to the new directory just created", function () {
    var kataDirectoryFiles = shelljs_1.ls(envConstants_1.KATADIRECTORY);
    expect(kataDirectoryFiles).toContain("package.json");
});
test("Node modules should be already installed inside the new kata folder", function () {
    var kataDirectoryFiles = shelljs_1.ls(envConstants_1.KATADIRECTORY);
    expect(kataDirectoryFiles).toContain("node_modules");
});
test("Create a package json using the name of the kata as name", function () {
    var test = createPackageJson_1.createPackageJson(envConstants_1.KATADIRECTORY);
    expect(test.name).toBe(envConstants_1.KATADIRECTORY);
});
