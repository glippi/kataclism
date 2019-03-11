import { Answers } from 'inquirer'
import { createTemplate } from './createTemplate'

export function chooseKata(answers: Answers) {
  const { kata, language } = answers
  const formatLanguageOption = language === 'javascript' ? {} : { t: true }
  const needKataDescription = true
  createTemplate(kata, formatLanguageOption, needKataDescription)
}
