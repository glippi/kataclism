import { getLanguageByParameter } from '../languages'
import { createTemplate } from './createTemplate'

export function createKata(kata: string, options: any) {
  const language = getLanguageByParameter(options)

  createTemplate(kata, language)
}
