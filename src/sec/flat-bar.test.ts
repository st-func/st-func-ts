import { SecFlatBar } from "./flat-bar";
import { SecPropertyType } from "../constant";

const F = new SecFlatBar();
F.b = 0.1;
F.t = 0.019;

test("SecFlatBar.setDimensions", () => {
  const secBuildBox = new SecFlatBar();
  secBuildBox.setDimensions(F.b, F.t);
  expect(secBuildBox.b).toBe(F.b);
  expect(secBuildBox.t).toBe(F.t);
  expect(secBuildBox.name).toBe("FB-100x19");
});

test("平鋼のA", () => {
  const A = 1.9e-3;
  const NUM_DIGITS = 16;
  expect(SecFlatBar.area(F.b, F.t)).toBeCloseTo(A, NUM_DIGITS);
  expect(F.property(SecPropertyType.Area)).toBeCloseTo(A, NUM_DIGITS);
});

test("平鋼のZX", () => {
  const ZX = 3.16666666666667e-5;
  const NUM_DIGITS = 18;
  expect(SecFlatBar.elasticModulusX(F.b, F.t)).toBeCloseTo(ZX, NUM_DIGITS);
  expect(F.property(SecPropertyType.ElasticModulusX)).toBeCloseTo(
    ZX,
    NUM_DIGITS
  );
});

test("平鋼のZY", () => {
  const ZY = 6.01666666666667e-6;
  const NUM_DIGITS = 19;
  expect(F.property(SecPropertyType.ElasticModulusY)).toBeCloseTo(
    ZY,
    NUM_DIGITS
  );
});

test("平鋼の単位質量", () => {
  const M = 1.4915e1;
  const NUM_DIGITS = 11;
  expect(F.property(SecPropertyType.MassPerMetre)).toBeCloseTo(M, NUM_DIGITS);
});

test("平鋼のiX", () => {
  const IX = 2.88675134594813e-2;
  const NUM_DIGITS = 15;
  expect(F.property(SecPropertyType.RadiusOfGyrationX)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
});

test("平鋼のiY", () => {
  const IY = 5.48482755730144e-3;
  const NUM_DIGITS = 16;
  expect(F.property(SecPropertyType.RadiusOfGyrationY)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
});

test("平鋼のIX", () => {
  const IX = 1.58333333333333e-6;
  const NUM_DIGITS = 19;
  expect(SecFlatBar.secondMomentOfAreaX(F.b, F.t)).toBeCloseTo(IX, NUM_DIGITS);
  expect(F.property(SecPropertyType.SecondMomentOfAreaX)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
});

test("平鋼のIY", () => {
  const IY = 5.71583333333333e-8;
  const NUM_DIGITS = 21;
  expect(F.property(SecPropertyType.SecondMomentOfAreaY)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
});
