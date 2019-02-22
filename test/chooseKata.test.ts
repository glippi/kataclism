import { chooseKata } from '../src/lib/chooseKata'
import { exec, rm, ls, cd, cat } from 'shelljs'
import inquirer, { Answers } from 'inquirer'
const module = require('../src/index')

//https://stackoverflow.com/questions/49862039/how-to-write-unit-tests-for-inquirer-js

jest.mock('inquirer')

describe('Module test', () => {
  test('user input', async () => {
    inquirer.prompt = jest.fn().mockResolvedValue({ email: 'some@example.com' })
    await expect(module()).resolves.toEqual({ email: 'some@example.com' })
  })
})
