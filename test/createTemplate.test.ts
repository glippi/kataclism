const shell = require("shelljs");
import { createPackageJson } from "../lib/createPackageJson";
const KATACLISM = "node index.ts";
const KATADIRECTORY = "bowling-kata";

beforeEach(() => {
  shell.exec(`${KATACLISM} create ${KATADIRECTORY}`);
});

afterEach(() => {
  shell.rm("-rf", KATADIRECTORY);
});

test("Create a directory with the name of the kata", () => {
  const allDirectories = shell.ls();

  expect(allDirectories).toContain(KATADIRECTORY);
});

test("Copy all files from template/javascript to the new directory just created", () => {
  const kataDirectoryFiles = shell.ls(KATADIRECTORY);

  expect(kataDirectoryFiles).toContain("package.json");
});

test("Node modules should be already installed inside the new kata folder", () => {
  const kataDirectoryFiles = shell.ls(KATADIRECTORY);

  expect(kataDirectoryFiles).toContain("node_modules");
});

test("Create a package json using the name of the kata as name", () => {
  console.log({ createPackageJson });
  const test = createPackageJson(KATADIRECTORY);
  expect(test.name).toBe(KATADIRECTORY);
});

//function createPackageJson(kataName) {
//  return {
//    name: kataName,
//    private: true,
//    version: "0.1.0",
//    license: "MIT",
//    description: "Kata bootstrapped with kataclism",
//    scripts: {
//      test: "jest",
//      watch: "jest --watchAll"
//    },
//    babel: {
//      presets: ["@babel/preset-env"],
//      plugins: ["@babel/plugin-proposal-class-properties"]
//    },
//    devDependencies: {
//      "@babel/core": "^7.1.6",
//      "@babel/plugin-proposal-class-properties": "^7.1.0",
//      "@babel/preset-env": "^7.1.6",
//      "babel-core": "^7.0.0-bridge.0",
//      "babel-jest": "^23.6.0",
//      jest: "^23.6.0",
//      prettier: "^1.15.2"
//    }
//  };
//}
