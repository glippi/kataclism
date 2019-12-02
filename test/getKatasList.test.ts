import { getKatasList } from '../src/lib/getKatasList'

it('should verify the list of all available katas', () => {
  const expectedKataList = getKatasList()
  const actual = [
    'bank-kata',
    'bowling-kata',
    'fizz_buzz-kata',
    'game_of_life-kata',
    'leap_years-kata',
    'mars_rover-kata',
    'roman_numerals-kata',
    'shopping_basket-kata',
    'social_networking-kata',
    'string_calculator-kata',
    'tennis_refactoring-kata',
    'tic_tac_toe-kata',
  ]
  expect(expectedKataList).toEqual(actual)
})
