const shell = require("shelljs");

const KATACLISM = "node index.js";
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
