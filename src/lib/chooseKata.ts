import { Answers } from 'inquirer'
import { createTemplate } from './createTemplate'

export function chooseKata(answers: Answers) {
  console.log({ answers })
  const { kata, language } = answers
  const formatLanguageOption = language === 'javascript' ? {} : { t: true }
  createTemplate(kata, formatLanguageOption)
}
