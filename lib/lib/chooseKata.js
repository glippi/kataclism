"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createTemplate_1 = require("./createTemplate");
function chooseKata(answers) {
    var kata = answers.kata, language = answers.language;
    var formatLanguageOption = language === 'javascript' ? {} : { t: true };
    createTemplate_1.createTemplate(kata, formatLanguageOption);
}
exports.chooseKata = chooseKata;
