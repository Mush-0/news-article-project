import { resolveScoreTag } from "../js/resolveScoreTag";

test("Enter NEU and get Neutral", () => {
  expect(resolveScoreTag("NEU")).toBe("Neutral");
});

test('Enter "hello" and get the default No polarity detected', () => {
  expect(resolveScoreTag("hello")).toBe("No polarity detected");
});
