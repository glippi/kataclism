const shell = require("shelljs");

beforeEach(() => {
  // Create a kata named bowling-kata
  shell.exec("kataclism create bowling-kata");
});

afterEach(() => {
  // Delete the directories created by kataclism
  shell.rm("-rf", "bowling-kata");
});

test("create a directory with the name of the kata", () => {
  const allDirectories = shell.ls();
  const directoryName = allDirectories.find(
    fileOrDirectory => fileOrDirectory === "bowling-kata"
  );

  expect(directoryName).toBe("bowling-kata");
});
