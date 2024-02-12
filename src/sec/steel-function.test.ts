import { SecSteelFunction } from "./steel-function";

test("鉄骨の単位質量", () => {
  expect(SecSteelFunction.massPerMetre(10.0)).toBe(78500.0);
});
