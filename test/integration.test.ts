import { cat, exec, ls, rm } from 'shelljs'

const KATACLISM = 'node dist/index.js'
const KATA = 'bowling-kata'

beforeAll(() => {
  exec(`npm run build && ${KATACLISM} create ${KATA}`)
})

afterAll(() => {
  rm('-rf', KATA)
  rm('-rf', 'dist')
})

test('Create a directory with the name of the kata', () => {
  const allDirectories = ls()
  expect(allDirectories).toContain(KATA)
})

test('Abort installation if already exist a directory with the same name as KATA', () => {
  const errorCode = exec(`${KATACLISM} create ${KATA}`).code
  expect(errorCode).toBe(1)
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
