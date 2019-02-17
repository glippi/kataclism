const sh = require("shelljs");

const KATANAME = "bowling-kata";

test("The name provided as argument to the action 'create' of Kataclism should be equal to the value of the key 'kata' returned from the stdout ", () => {
  const stdout = sh.exec(`node index.js create ${KATANAME}`).stdout;
  expect(stdout).toMatch(new RegExp(KATANAME));
});
