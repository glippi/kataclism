import { exec, rm, ls, cd, cat } from 'shelljs'
import { setupVariablesName, createTemplate } from '../src/lib/createTemplate'

const KATACLISM = 'node lib/index.js'
const KATA = 'bowling-kata'

beforeAll(() => {
  exec(`${KATACLISM} create ${KATA}`)
})

afterAll(() => {
  rm('-rf', KATA)
})

test('Expect the template to be JavaScript', () => {
  const { templatePath } = setupVariablesName(KATA, {})
  expect(templatePath).toMatch(new RegExp('javascript'))
})

test('Expect the template to be TypeScript', () => {
  const { templatePath } = setupVariablesName(KATA, { t: true })
  expect(templatePath).toMatch(new RegExp('typescript'))
})

test('Create a directory with the name of the kata', () => {
  const allDirectories = ls()
  expect(allDirectories).toContain(KATA)
})

test('Abort installation if already exist a directory with the same name as KATA', () => {
  const kataclismLogErrorInConsole = exec(`${KATACLISM} create ${KATA}`).stderr
  expect(kataclismLogErrorInConsole).toBe(
    "\n\nCan't create kata project wiht name: bowling-kata.\n\n\nThe directory 'bowling-kata' already exist.\n\n\n"
  )
})

test('Copy all files from template/javascript to the new directory just created', () => {
  const kataDirectoryFiles = ls(KATA)
  expect(kataDirectoryFiles).toContain('package.json')
})

test("Check if the package.json contain the name of the kata for the 'name' field", () => {
  const kataPackageJson = cat(`${KATA}/package.json`).stdout
  expect(kataPackageJson).toMatch(new RegExp(KATA))
})

test('Setup README with name provided for the kata', () => {
  const kataPackageREADME = cat(`${KATA}/README.md`).stdout
  expect(kataPackageREADME).toMatch(new RegExp(KATA))
})

test('Install all dependencies', () => {
  const kataDirectoryFiles = ls(KATA)
  expect(kataDirectoryFiles).toContain('node_modules')
})
