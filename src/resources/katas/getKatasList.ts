import { ls } from 'shelljs'

export function extractFileName(path: string): string {
  const fileNameWithExtension = path.split('/')[4]
  const fileNameWithoutExtension = fileNameWithExtension.split('.')[0]
  return fileNameWithoutExtension
}

export function getKatasList() {
  let katas: any = []
  ls('./src/resources/katas/*.md').forEach((file: any) => {
    katas.push(file)
  })
  const allKatas = katas.map((file: string) => extractFileName(file))
  return allKatas
}
