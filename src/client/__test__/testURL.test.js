import { testURL } from "../js/testURL";

const inputs = [
  "http://google.com",
  "https://www.google.com/search?client=firefox-b-d&q=hello",
  "hello-world.com",
  "29-Aug-2021",
  "site-name",
];
const outputs = [true, true, false, false, false];
test("Enter multiple strings and watch correct output", () => {
  inputs.forEach((elem, indx) => {
    expect(testURL(elem)).toBe(outputs[indx]);
  });
});
