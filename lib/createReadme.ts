export function createReadme(appTitle: string) {
  return `
# 🥋⛩️  ${appTitle}

This project was bootstrapped with [Kataclism](https://github.com/glippi/kataclism).

## Usage
For execute the tests, just run:
- \`yarn test\` => if you want ro run the tests only once
- \`yarn watch\` => if you want ro keep test refreshing as you code

## Directories:
\`\`\`
|--src
   |---index.js
|--test
   |---index.test.js
|--package.json
|--README.MD
|--.babelrc
|--.prettierrc
\`\`\`

[Read the rest of the documentation here.](https://github.com/glippi/kataclism)`
}
