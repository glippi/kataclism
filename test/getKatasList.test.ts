import { getKatasTitle } from '../src/lib/getKatasList'

it('should verify the list of all available katas', () => {
  const expectedKataList = getKatasTitle()
  const actual = [
    'bank-kata',
    'bowling-kata',
    'fizz-buzz-kata',
    'game-of-life-kata',
    'leap-years-kata',
    'mars-rover-kata',
    'roman-numerals-kata',
    'string-calculator-kata',
    'tic-tac-toe-kata',
  ]
  expect(expectedKataList).toEqual(actual)
})
