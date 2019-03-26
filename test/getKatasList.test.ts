import { getKatasList, extractFileName } from '../src/lib/getKatasList'

test('it should check for the existence of at least one kata', () => {
  const katas = getKatasList()
  expect(katas.length).toBeGreaterThan(0)
})

test('it should extract the name of the markdown file', () => {
  const markdownFileName = extractFileName('./src/katasReadme/bowling-kata.md')
  expect(markdownFileName).toBe('bowling-kata')
})
