import { ls, rm, mkdir, cd } from "shelljs"
import { createReadme } from "../lib/createReadme";
import { writeReadme } from "../lib/createTemplate";

const TEST_DIRECTORY_README = 'test-readme'

beforeEach(() => {
  mkdir(TEST_DIRECTORY_README)
  const readme = createReadme(TEST_DIRECTORY_README)
  writeReadme(TEST_DIRECTORY_README, readme)
});

afterEach(() => {
  rm('-rf', TEST_DIRECTORY_README)
});

test("Should create a README", ()=> {
  const kataDirectoryFiles = ls(TEST_DIRECTORY_README);
  expect(kataDirectoryFiles).toContain("README.md");
})
