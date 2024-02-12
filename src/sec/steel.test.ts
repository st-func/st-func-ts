import { SecSteel } from "./steel";

test("鉄骨の単位質量", () => {
  expect(SecSteel.massPerMetre(10.0)).toBe(78500.0);
});
