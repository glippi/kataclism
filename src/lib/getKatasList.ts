import { KATACLISM_ROOT_DIRECTORY } from './createTemplate'
import fs from 'fs'
import path from 'path'

const FILE_EXTENSION = '.md'

export function getKatasList(): string[] {
  return fs
    .readdirSync(`${KATACLISM_ROOT_DIRECTORY}src/katasReadme`)
    .map((filename: string) => path.basename(filename, FILE_EXTENSION))
}
