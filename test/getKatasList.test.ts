import { getKatasTitle } from '../src/lib/getKatasList'

it('should verify the list of all available katas', () => {
  const expectedKataList = getKatasTitle()
  const actual = [
    'fizz-buzz-kata',
    'leap-years-kata',
    'string-calculator-kata',
    'roman-numerals-kata',
    'bank-kata',
    'bowling-kata',
    'game-of-life-kata',
    'mars-rover-kata',
    'tic-tac-toe-kata',
    'christmas-tree',
  ]
  expect(expectedKataList).toEqual(actual)
})
