import { Answers } from 'inquirer'
import { createTemplate } from './createTemplate'

export function chooseKata(answers: Answers) {
  const choice = answers.kata
  createTemplate(choice, {})
  return choice
}
