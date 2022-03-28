import { Kata } from '../kata'

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

const katasReadme: Kata[] = [
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

export class Katas {
  public static get all() {
    return katasReadme.map(k => k.name)
  }

  public static getByName = (name: string): Kata => {
    return katasReadme.find(k => k.name === name)!
  }
}
