import { supportedLanguages } from '../languages'
import { CustomAnswer } from './answer'
import { createTemplate } from './createTemplate'
import { getDescriptionKataByTitle } from './getKatasList'

export function chooseKata(answers: CustomAnswer) {
  const { kata, language } = answers
  const formatLanguageOption = supportedLanguages[language]
  const kataDescription = getDescriptionKataByTitle(kata)

  createTemplate(kata, formatLanguageOption, kataDescription)
}
