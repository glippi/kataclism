import { exec, rm, ls } from "shelljs"
import { createPackageJson } from "../lib/createPackageJson";
import { KATACLISM, KATANAME, KATADIRECTORY } from './envConstants'


beforeEach(() => {
  exec(`${KATACLISM} create ${KATADIRECTORY}`);
});

afterEach(() => {
  rm("-rf", KATADIRECTORY);
});

test("Create a directory with the name of the kata", () => {
  const allDirectories = ls();

  expect(allDirectories).toContain(KATADIRECTORY);
});

test("Copy all files from template/javascript to the new directory just created", () => {
  const kataDirectoryFiles = ls(KATADIRECTORY);

  expect(kataDirectoryFiles).toContain("package.json");
});

test("Node modules should be already installed inside the new kata folder", () => {
  const kataDirectoryFiles = ls(KATADIRECTORY);

  expect(kataDirectoryFiles).toContain("node_modules");
});

test("Create a package json using the name of the kata as name", () => {
  const test = createPackageJson(KATADIRECTORY);
  expect(test.name).toBe(KATADIRECTORY);
});
