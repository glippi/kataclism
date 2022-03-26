import { Kata, katasReadme } from './katasReadme'

export function getKatasTitle(): string[] {
  return katasReadme.map((k: Kata) => k.title)
}

export function getDescriptionKataByTitle(title: string): string {
  return katasReadme.find(k => k.title === title)?.description ?? ''
}
