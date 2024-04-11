import { SecRoundBar } from "./round-bar";
import { SecPropertyType } from "../constant";

const B = new SecRoundBar();
B.r = 0.032;

test("SecRoundBar.setDimensions", () => {
  const secRoundBar = new SecRoundBar();
  secRoundBar.setDimensions(B.r);
  expect(secRoundBar.r).toBe(B.r);
  expect(secRoundBar.name).toBe("RB-32");
});

test("RoundBarのA", () => {
  const A = 8.04247719318987e-4;
  const NUM_DIGITS = 17;
  expect(SecRoundBar.area(B.r)).toBeCloseTo(A, NUM_DIGITS);
  expect(B.property(SecPropertyType.Area)).toBeCloseTo(A, NUM_DIGITS);
});

test("RoundBarのZ", () => {
  const Z = 3.21699087727595e-6;
  const NUM_DIGITS = 19;
  expect(SecRoundBar.elasticModulusX(B.r)).toBeCloseTo(Z, NUM_DIGITS);
  expect(B.property(SecPropertyType.ElasticModulusX)).toBeCloseTo(
    Z,
    NUM_DIGITS
  );
  expect(B.property(SecPropertyType.ElasticModulusY)).toBeCloseTo(
    Z,
    NUM_DIGITS
  );
});

test("RoundBarの単位質量", () => {
  const M = 6.31334459665405;
  const NUM_DIGITS = 12;
  expect(B.property(SecPropertyType.MassPerMetre)).toBeCloseTo(M, NUM_DIGITS);
});

test("RoundBarのi", () => {
  const IX = 8.0e-3;
  const NUM_DIGITS = 16;
  expect(B.property(SecPropertyType.RadiusOfGyrationX)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
  expect(B.property(SecPropertyType.RadiusOfGyrationY)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
});

test("RoundBarのI", () => {
  const IX = 5.14718540364152e-8;
  const NUM_DIGITS = 21;
  expect(SecRoundBar.secondMomentOfAreaX(B.r)).toBeCloseTo(IX, NUM_DIGITS);
  expect(B.property(SecPropertyType.SecondMomentOfAreaX)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
  expect(B.property(SecPropertyType.SecondMomentOfAreaY)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
});
