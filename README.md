<p align="center">
   <img src="https://github.com/glippi/kataclism/blob/master/images/kataclism.svg" width="700"/>
</p>

> A violent upheaval that causes your terminal to scaffold an entire new kata

[![CircleCI](https://circleci.com/gh/glippi/kataclism.svg?style=svg)](https://circleci.com/gh/glippi/kataclism)
[![version](https://img.shields.io/npm/v/kataclism.svg?style=flat-square)](https://www.npmjs.com/package/kataclism)
[![MIT License](https://img.shields.io/npm/l/kataclism.svg?style=flat-square)](https://github.com/glippi/kataclism/blob/master/LICENSE)

# 🥋⛩️ Kataclism
This project aims to facilitate the life of all the **TDD disciples** and **kata practicioners**, wihch works with `JavaScript` or `TypeScript`.
As we know, in order to do a kata we need to setup always the same boring stuff, like `test`and `src` directories; moreover, we need to setup all the tooling that nowadays we need as JavaScript developers (babel, prettierc etc).
I created this package to **reduce the time spent on bootstrapping the kata structure, and let the developer starts immediately to work on the kata**.

# Usage
To globally install kataclism run:

```console
npx kataclism
```

## How does it works?
There are two ways of using `kataclism`:

### 1. Create a new empty project:
<img src="https://github.com/glippi/kataclism/blob/master/images/kataclism-js.png" />

Call kataclism with the argument `create` followed by the name of the project you want to start and kataclism will bootstrap the project.

#### Want to work with TypeScript?
<img src="https://github.com/glippi/kataclism/blob/master/images/kataclism-ts.png" />

Add `-t` option to bootstrap the project with TypeScript.


### 2. Choose one of the default katas:
<img src="https://github.com/glippi/kataclism/blob/master/images/kataclism-inquirer.png" />

Run kataclism without arguments and kataclism will prompt you with a list of some of the most used katas; navigate the list with the arrow keys, and select the kata you want to practice with enter.
By default, kataclism will generated a `README` with all the instructions needed for practicing the kata you choosed.

#### Folder Structure:
The following structure generated is for the `JavaScript` template:
```
|--src
   |---index.js
|--test
   |---index.test.js
|--package.json
|--README.MD
```
and this for `TypeScript`:
```
|--src
   |---index.ts
|--test
   |---index.test.ts
|--package.json
|--tsconfig.json
|--README.MD
```
and this for `Netcore`:
```
|--Kata
   |---YourAmazingProductionCode.cs
   |---YourAmazingUnitTests.cs
|--README.MD
```

## Supported languages

|  language  |  cli flag  |  available  |
|----|----|----|
|  JavaScript  |  `'-j'`  | :heavy_check_mark: |
|  TypeScript  |  `-t`  | :heavy_check_mark:  |
|  Netcore  |  `-n`  | :heavy_check_mark:  |

> But by default language is JavaScript

## FAQ

##### How to run tests?
> For JavaScript and TypeScript
   * `npm run test:once`
   * `npm run test:watch` for keep the tests executing on each change.
   <br>
> For Netcore
   * `dotnet test`.

##### What are katas?
For more info about the *what* and the *why* behind katas, please check out [this article](http://codekata.com/); and if you're courious about the history behind them [this one too](http://codekata.com/kata/codekata-how-it-started/).

##### Where can I find katas?
Have a look to these resources:
   * :link: [awesome-katas](https://github.com/gamontal/awesome-katas)
   * :link: [CodeKata](http://codekata.com/)
   * :link: [Coding Dojo](http://codingdojo.org/kata/)
   * :link: [Codurance's katalyst](https://katalyst.codurance.com/)

## License

MIT
