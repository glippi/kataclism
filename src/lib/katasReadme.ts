import { Bank } from './katas/bank'
import { Bowling } from './katas/bowling'
import { FizzBuzz } from './katas/fizz-buzz'
import { GameOfLife } from './katas/game-of-life'
import { LeapYear } from './katas/leap-year'
import { MarsRover } from './katas/mars-rover'
import { RomanNumerals } from './katas/roman-numerals'
import { StringCalculator } from './katas/string-calculator'
import { TicTacToe } from './katas/tic-tac-toe'
import { XmasTree } from './katas/xmas-tree'

export type Kata = {
  title: string
  description: string
}

export const katasReadme = [
  FizzBuzz,
  LeapYear,
  StringCalculator,
  RomanNumerals,
  Bank,
  Bowling,
  GameOfLife,
  MarsRover,
  TicTacToe,
  XmasTree,
]
