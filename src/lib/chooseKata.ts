import { KataTemplate } from '../kata'
import { SupportedLanguages, Languages } from '../languages'
import { createTemplate } from './createTemplate'
import { Katas } from './katas'

export const chooseKata = (answers: {
  kata: string
  language: keyof SupportedLanguages
}) => {
  const { kata, language } = answers
  const selectedKata = Katas.getByName(kata)
  const selectedLanguage = Languages.languages[language]

  const template: KataTemplate = {
    ...selectedKata,
    language: selectedLanguage,
  }

  createTemplate(template)
}
