export const LCDKata = {
  name: 'lcd-kata',
  description: `
## Nots
- Please do NOT read the next part before completing the previous one. Part of the purpose of this kata is to make you practice refactoring and adapting to changing requirements.
- Take small steps. You should always be able to go to a green state (with all tests passing) quickly.
- Stick to the red, green and refactor steps.
- Try not to refactor in the red. If you write a failing test that would need a big rewrite to pass, consider removing the test, refactoring in the green, and then writing the test again.
- As you progress through the problem, you should see your algorithm start to evolve. In other words, as the tests get more specific, the code gets more generic.
- Don't be afraid to let the code get a little bit messy - sometimes that's the best way to spot the next refactoring step.

## Getting started

\`\`\
  public string Convert(int number)
\`\`\

### Part1
 - Write a program that given a number, converts into LCD style numbers using the following format.

 \`\`\
 _  _     _  _  _  _  _
 | _| _||_||_ |_   ||_||_|
 ||_  _|  | _||_|  ||_| _|
 \`\`\

(each digit is 3 lines high)
 \`\`\
Given a number 1
When convert to LCD style
Then they would see:
\`\`\

\`\`\
|
|
\`\`\

### Part2
 - Follow the previous statement, but now the program must allow numbers greater than 9.

 \`\`\
 _  _     _  _  _  _  _
 | _| _||_||_ |_   ||_||_|
 ||_  _|  | _||_|  ||_| _|
 \`\`\

(each digit is 3 lines high)
 \`\`\
 Given a number 13
 When convert to LCD style
 Then they would see:
\`\`\

\`\`\
  _
| _|
| _|
\`\`\

### Part3
 - Now, refactor the program so that it now accepts letters, converts into LCD style letters, using the following format.

 \`\`\
  __   __   __  ___   __  __  __
 |__| |__| |     | | |__ |__ |__
 |  | |__| |__  _|_| |__ |   |__|
 \`\`\

(each digit is 3 lines high)
 \`\`\
 Given a word HELLO
 When convert to LCD style
 Then they would see:
\`\`\

\`\`\
 __               __
|__| |__ |   |   |  |
|  | |__ |__ |__ |__|
\`\`\

`,
}
