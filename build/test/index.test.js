"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shelljs_1 = require("shelljs");
var envConstants_1 = require("./envConstants");
test("The name provided as argument to the action 'create' of Kataclism should be equal to the value of the key 'kata' returned from the stdout ", function () {
    var stdout = shelljs_1.exec(envConstants_1.KATACLISM + " create " + envConstants_1.KATANAME).stdout;
    expect(stdout).toMatch(new RegExp(envConstants_1.KATANAME));
});
