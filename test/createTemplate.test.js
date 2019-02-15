const shell = require("shelljs");

const KATADIRECTORY = "bowling-kata";

beforeEach(() => {
  // Create a kata named bowling-kata
  shell.exec(`kataclism create ${KATADIRECTORY}`);
});

afterEach(() => {
  // Delete the directories created by kataclism
  shell.rm("-rf", KATADIRECTORY);
});

test("Create a directory with the name of the kata", () => {
  const allDirectories = shell.ls();

  expect(allDirectories).toContain(KATADIRECTORY);
});

test("Copy all files from template/javascript to the new directory just created", () => {
  const kataDirectory = shell.cd(KATADIRECTORY);
  const kataDirectoryFiles = shell.ls();

  expect(kataDirectoryFiles).toContain("package.json");

  // go to previous directory in order to remove KATADIRECTORY
  shell.cd("../");
});
