import { Language } from './languages'

export interface Kata {
  name: string
  description: string
}

export interface KataTemplate extends Kata {
  language: Language
}
