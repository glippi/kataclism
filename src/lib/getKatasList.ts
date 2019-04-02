import { ls } from 'shelljs'

export function extractFileName(path: string): string {
  const fileName = path.replace(/^.+\//, '')
  const fileNameWithoutExtension = fileName.replace(/\.md/, '')
  return fileNameWithoutExtension
}

export function getKatasList() {
  let katas: string[] = []
  const kataclismDirectory = process.cwd()
  ls(`${kataclismDirectory}/src/katasReadme/*.md`).forEach(file => {
    katas.push(file)
  })
  const allKatas = katas.map((file: string) => extractFileName(file))
  return allKatas
}
