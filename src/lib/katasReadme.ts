export type Kata = {
  id: number;
  title: string;
  description: string;
}

export const katasReadme = [
  {
    id: 1,
    title: 'bank-kata',
    description: `
  Think of your personal bank account experience When in doubt, go for the simplest solution.
Requirements:

- Deposit and Withdrawal
- Transfer
- Account statement (date, amount, balance)
- Statement printing
- Statement filters (just deposits, withdrawal, date)

\`\`\`
Given a client makes a deposit of 1000 on 10-01-2012
And a deposit of 2000 on 13-01-2012
And a withdrawal of 500 on 14-01-2012
When she prints her bank statement
Then she would see
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
\`\`\`
  `,
  },
  {
    id: 2,
    title: 'bowling-kata',
    description: `
    Write a program to score a game of Ten-Pin Bowling.

This online app can help you: [http://www.bowlinggenius.com/][http://www.bowlinggenius.com/]

_Input_: string (described below) representing a bowling game
_Ouput_: integer score
The scoring rules

Each game, or "line" of bowling, includes ten turns, or "frames" for the bowler.

In each frame, the bowler gets up to two tries to knock down all ten pins.

If the first ball in a frame knocks down all ten pins, this is called a "strike". The frame is over. The score for the frame is ten plus the total of the pins knocked down in the next two balls.

If the second ball in a frame knocks down all ten pins, this is called a "spare". The frame is over. The score for the frame is ten plus the number of pins knocked down in the next ball.

If, after both balls, there is still at least one of the ten pins standing the score for that frame is simply the total number of pins knocked down in those two balls.

If you get a spare in the last (10th) frame you get one more bonus ball. If you get a strike in the last (10th) frame you get two more bonus balls. These bonus throws are taken as part of the same turn. If a bonus ball knocks down all the pins, the process does not repeat. The bonus balls are only used to calculate the score of the final frame.

The game score is the total of all frame scores.
Symbol meanings

    X indicates a strike
    / indicates a spare
    - indicates a miss
    | indicates a frame boundary
    The characters after the || indicate bonus balls

Examples

X|X|X|X|X|X|X|X|X|X||XX
Ten strikes on the first ball of all ten frames.
Two bonus balls, both strikes.
Score for each frame == 10 + score for next two
balls == 10 + 10 + 10 == 30
Total score == 10 frames x 30 == 300

9-|9-|9-|9-|9-|9-|9-|9-|9-|9-||
Nine pins hit on the first ball of all ten frames.
Second ball of each frame misses last remaining pin.
No bonus balls.
Score for each frame == 9
Total score == 10 frames x 9 == 90

5/|5/|5/|5/|5/|5/|5/|5/|5/|5/||5
Five pins on the first ball of all ten frames.
Second ball of each frame hits all five remaining pins, a spare.
One bonus ball, hits five pins.
Score for each frame == 10 + score for next one
ball == 10 + 5 == 15
Total score == 10 frames x 15 == 150

X|7/|9-|X|-8|8/|-6|X|X|X||81
Total score == 167
    `,
  },
  {
    id: 3,
    title: 'fizz-buzz-kata',
    description: `
    Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

Sample output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16 17
Fizz
19
Buzz
... etc up to 100
    `,
  },
  {
    id: 4,
    title: 'game-of-life-kata',
    description: `
    In this finite version of Conway's Game of Life (here is an excerpt of the rules) ...

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

    Any live cell with fewer than two live neighbours dies, as if caused by under-population.

    Any live cell with two or three live neighbours lives on to the next generation.

    Any live cell with more than three live neighbours dies, as if by overcrowding.

    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one)

...implement your own method which will take the initial state as an NxM array of 0's (dead cell) and 1's (living cell) and return an equally sized array representing the next generation. Cells outside the array must be considered dead. Cells that would born out of the array boundaries should be ignored (universe never grows beyond the initial NxM grid).
N.B.: for illustration purposes, 0 and 1 will be represented as ░ and ▓ blocks (PHP: basic black and white squares) respectively. You can take advantage of the 'htmlize' function to get a text representation of the universe:
eg:

\`\`\`javascript
console.log(htmlize(cells))
\`\`\`

    `,
  },
  {
    id: 5,
    title: 'leap-years-kata',
    description: `
    Write a function that returns true or false depending on whether its input integer is a leap year or not.

The following rules determine if an integer is a leap year:

- It is NOT a leap year if it is NOT divisible by 4.
- It is a leap year if it is divisible by 4.
- It is a leap year if it is divisible by 400.
- It is NOT a leap year if it is divisible by 100 but NOT by 400.

For example:

- 1997 is not a leap year (not divisible by 4)
- 1996 is a leap year (divisible by 4)
- 1600 is a leap year (divisible by 400)
- 1800 is NOT a leap year (divisible by 4, divisible by 100, NOT divisible by 400)
    `,
  },
  {
    id: 6,
    title: 'mars-rover-kata',
    description: `
    A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth. A rover's position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 1, 1, N, which means the rover is in the bottom left corner and facing North. In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

The rover wraps around if it reaches the end of the grid.

## Optional

The grid may have obstacles. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle e.g. O 2 2 N

# Input

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 1,1.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input. The first line gives the rover's starting position, and the second line is a series of instructions telling the rover how to explore the plateau. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.
Output

The output for each rover should be its final co-ordinates and heading.

# Example

## Input:
\`\`\`
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
\`\`\`

## Output:
\`\`\`
1 3 N
5 1 E
\`\`\`
    `,
  },
  {
    id: 7,
    title: 'roman-numerals-kata',
    description: `
    Given a positive integer number lesser than 4000 (eg 42) determine its Roman numeral representation as a String (eg "XLII").

You cannot write numerals like IM for 999. Wikipedia states "Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero."

Examples:

\`\`\`1 -> "I" | 10 -> "X" | 100 -> "C" | 1000 -> "M"
2 -> "II" | 20 -> "XX" | 200 -> "CC" | 2000 -> "MM"
3 -> "III" | 30 -> "XXX" | 300 -> "CCC" | 3000 -> "MMM"
4 -> "IV" | 40 -> "XL" | 400 -> "CD" |
5 -> "V" | 50 -> "L" | 500 -> "D" |
6 -> "VI" | 60 -> "LX" | 600 -> "DC" |
7 -> "VII" | 70 -> "LXX" | 700 -> "DCC" |
8 -> "VIII" | 80 -> "LXXX" | 800 -> "DCCC" |
9 -> "IX" | 90 -> "XC" | 900 -> "CM" |
1990 -> "MCMXC" (1000 -> "M" + 900 -> "CM" + 90 -> "XC")
2008 -> "MMVIII" (2000 -> "MM" + 8 -> "VIII")
99 -> "XCIX" (90 -> "XC" + 9 -> "IX")
47 -> "XLVII" (40 -> "XL" + 7 -> "VII")
3888 -> "MMMDCCCLXXXVIII" (3000 -> "MMM" + 800 -> "DCCC" + 80 -> "LXXX" + 8 -> "VIII")\`\`\`
    `,
  },
  {
    id: 8,
    title: 'string-calculator-kata',
    description: `
    1. Create a simple String calculator with a method int Add(string numbers)
  - The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
  - Start with the simplest test case of an empty string and move to 1 and two numbers

2. Allow the Add method to handle an unknown amount of numbers
3. Allow the Add method to handle new lines between numbers (instead of commas).
  - the following input is ok: “1\n2,3” (will equal 6)
  - the following input is NOT ok: “1,\n” (not need to prove it - just clarifying)

4. Support different delimiters
  - to change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
  - the first line is optional. all existing scenarios should still be supported

5. Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.if there are multiple negatives, show all of them in the exception message
6. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2
7. Delimiters can be of any length with the following format: “//[delimiter]\n” for example: “//[***]\n1**_2_**3” should return 6
8. Allow multiple delimiters like this: “//[delim1][delim2]\n” for example “//[][%]\n12%3” should return 6.
9. make sure you can also handle multiple delimiters with length longer than one char
    `,
  },
  {
    id: 9,
    title: 'tic-tac-toe-kata',
    description: `
    ## rules:
X always goes first.

Players cannot play on a played position

Players alternate placing X’s and O’s on the board until either:

    One player has three in a row, horizontally, vertically or diagonally
    All nine squares are filled.

If a player is able to draw three X’s or three O’s in a row, that player wins.

If all nine squares are filled and neither player has three in a row, the game is a draw.

    `,
  },
  {
    id: 10,
    title: 'christmas-tree',
    description: `
Create a function \`christmasTree(height)\` that returns a christmas tree of the correct height.
christmasTree(5) should return:

\`\`\`
          *
         ***
        *****
       *******
      *********
\`\`\`

Height passed is always an integer between 0 and 100.

Use \`\n\` for newlines between each line.
Pad with spaces so each line is the same length. The last line having only stars, no spaces.
    `,
  },
]
