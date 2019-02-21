import { exec, rm, ls, cd, cat } from "shelljs"
import { setupVariablesName } from '../lib/createTemplate'
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

test("Check if the package.json contain the name of the kata for the 'name' field", () => {
  const kataPackageJson = cat(`${KATADIRECTORY}/package.json`).stdout
  expect(kataPackageJson).toMatch(new RegExp(KATANAME))
});

test("Expect the template to be JavaScript", () => {
  const { templateType } = setupVariablesName(KATANAME, {})
  expect(templateType).toBe('javascript')
})


test("Expect the template to be TypeScript", () => {
  const { templateType } = setupVariablesName(KATANAME, {t:true})
  expect(templateType).toBe('typescript')
})

test("Expect the template to be TypeScript", () => {
  const { templateType } = setupVariablesName(KATANAME, {t:true})
  expect(templateType).toBe('typescript')
})
