import {
  getKatasList,
  extractFileName,
} from '../src/resources/katas/getKatasList'

test('it should returns the list of all available katas in the directory', () => {
  const katas = getKatasList()
  expect(katas.length).toBeGreaterThan(0)
})

test('it should extract the name of the markdown file', () => {
  const markdownFile = extractFileName('./src/resources/katas/bowling-kata.md')
  expect(markdownFile).toBe('bowling-kata')
})
