"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var createTemplate_1 = require("./createTemplate");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var FILE_EXTENSION = '.md';
function getKatasList() {
    return fs_1.default
        .readdirSync(createTemplate_1.KATACLISM_ROOT_DIRECTORY + "src/katasReadme")
        .map(function (filename) { return path_1.default.basename(filename, FILE_EXTENSION); });
}
exports.getKatasList = getKatasList;
