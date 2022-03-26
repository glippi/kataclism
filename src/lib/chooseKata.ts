import { Answers } from 'inquirer'
import { createTemplate } from './createTemplate'
import { getDescriptionKataByTitle } from './getKatasList'

export function chooseKata(answers: Answers) {
  const { kata, language } = answers
  const formatLanguageOption = language === 'javascript' ? {} : { t: true }
  const kataDescription = getDescriptionKataByTitle(kata)

  createTemplate(kata, formatLanguageOption, kataDescription)
}
