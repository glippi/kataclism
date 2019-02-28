import { ls } from 'shelljs'

function exitBuildDirectory(path: string): string {
  return path.replace('lib/', 'src/')
}

export function extractFileName(path: string): string {
  // TODO: refactor using regex, can't rely on split and indexing
  const fileNameWithExtension = path.split('/')[8]
  const fileNameWithoutExtension = fileNameWithExtension.split('.')[0]
  return fileNameWithoutExtension
}

export function getKatasList() {
  let katas: any = []
  const kataclismDirectory = exitBuildDirectory(__dirname)
  ls(`${kataclismDirectory}/*.md`).forEach((file: any) => {
    katas.push(file)
  })
  const allKatas = katas.map((file: string) => extractFileName(file))
  return allKatas
}
