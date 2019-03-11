<p align="center">
   <img src="https://github.com/glippi/kataclism/blob/master/kataclism.svg" width="700"/>
</p>

> A violent upheaval that causes your terminal to scaffold an entire new kata

[![Build Status](https://travis-ci.com/glippi/kataclism.svg?branch=master)](https://travis-ci.com/glippi/kataclism)
[![version](https://img.shields.io/npm/v/react-testing-library.svg?style=flat-square)](https://www.npmjs.com/package/kataclism) 
[![MIT License](https://img.shields.io/npm/l/react-testing-library.svg?style=flat-square)](https://github.com/kentcdodds/react-testing-library/blob/master/LICENSE)

# 🥋⛩️ Kataclism
This project aims to facilitate the life of all the **TDD disciples** and **kata practicioners** working with `JavaScript` or `TypeScript`.
As we know, in order to do a kata we need to setup always the same boring stuff, like `test`and `src` directories; moreover, we need to setup all the tooling that nowadays we need as JavaScript developers (babel, prettierc etc).
I created this package exactly for this reason: **reduce the time spent on bootstrapping the kata structure, and let the developer starts immediately to work on the kata**.

# Usage
To install kataclism run:

```console
npm install -g kataclism
```

or if you want to use it without have to installing it:

```console
npx kataclism create <name-of-kata> [programming-language]
```

## How does it works?
There are two ways for taking advantage of `kataclism`:

### 1. Create a new empty project:
<img src="https://github.com/glippi/kataclism/blob/master/kataclism-js.png" />

Calling kataclism with the action `create` followed by the name of the project you want to start, will let kataclism bootstrap all the directories and dependecies structures.

#### Want to work with TypeScript?
<img src="https://github.com/glippi/kataclism/blob/master/kataclism-ts.png" />

Just add `-t` option to bootstrap the project with TypeScript.


### 2. Choose one of the default katas:
<img src="https://github.com/glippi/kataclism/blob/master/kataclism-inquirer.png" />

Running kataclism without any arguments will let kataclism prompt you with a list of the most relevant katas; just navigate the list with the arrow keys, and select with enter the kata you want to practice.
By default, kataclism will generated a `README` with all the instructions needed for practicing the kata you choosed.

#### Folder Structure:
The following is the structure generated for the `JavaScript` template:
```
|--src
   |---index.js
|--test
   |---index.test.js
|--package.json
|--README.MD
```
This one for `TypeScript`:
```
|--src
   |---index.ts
|--test
   |---index.test.ts
|--package.json
|--tsconfig.json
|--README.MD
```

## FAQ

##### How to run the tests?
Just execute `yarn test`, if you want to run the tests once, or `yarn watch` for keep the tests executing on each change.

##### What is a code kata?
For more info about the *what* and *why* behind code katas, check out [this article](http://codekata.com/); and for a bit of story behind them [this one](http://codekata.com/kata/codekata-how-it-started/).

##### Where can I find code katas?
Check out these resources:
   * [awesome-katas](https://github.com/gamontal/awesome-katas)
   * [CodeKata](http://codekata.com/)
   * [Coding Dojo](http://codingdojo.org/kata/)


## License

MIT
