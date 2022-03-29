import { KataTemplate } from '../kata'
import { Languages } from '../languages'
import { createTemplate } from './createTemplate'

export const createKata = (kata: string, command: any) => {
  const template: KataTemplate = {
    name: kata,
    description: '',
    language: Languages.getByCommand(command),
  }

  createTemplate(template)
}
