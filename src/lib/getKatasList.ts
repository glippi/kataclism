import { KATACLISM_ROOT_DIRECTORY } from './createTemplate'
import { Kata, katasReadme } from './katasReadme'

export function getKatasTitle(): string[] {
  return katasReadme.map((k: Kata) => k.title)
}

export function getKataDescription(title: string): string {
  return katasReadme.filter((k: Kata) => k.title === title)[0].description
}
