import { SecBuildBox } from "./build-box";
import { SecPropertyType } from "../constant";

const B = new SecBuildBox();
B.a = 1.0;
B.b = 0.8;
B.t1 = 0.019;
B.t2 = 0.025;

test("SecBuildBox.setDimensions", () => {
  const secBuildBox = new SecBuildBox();
  secBuildBox.setDimensions(B.a, B.b, B.t1, B.t2);
  expect(secBuildBox.a).toBe(B.a);
  expect(secBuildBox.b).toBe(B.b);
  expect(secBuildBox.t1).toBe(B.t1);
  expect(secBuildBox.t2).toBe(B.t2);
});

test("Build-BOXのA", () => {
  const A = 7.61e-2;
  const NUM_DIGITS = 15;
  expect(SecBuildBox.area(B.a, B.b, B.t1, B.t2)).toBeCloseTo(A, NUM_DIGITS);
  expect(B.property(SecPropertyType.Area)).toBeCloseTo(A, NUM_DIGITS);
});

test("Build-BOXのZX", () => {
  const ZX = 2.44467083333333e-2;
  const NUM_DIGITS = 16;
  expect(SecBuildBox.elasticModulusX(B.a, B.b, B.t1, B.t2)).toBeCloseTo(
    ZX,
    NUM_DIGITS
  );
  expect(B.property(SecPropertyType.ElasticModulusX)).toBeCloseTo(
    ZX,
    NUM_DIGITS
  );
});

test("Build-BOXのZY", () => {
  const ZY = 1.90982934166667e-2;
  const NUM_DIGITS = 16;
  expect(B.property(SecPropertyType.ElasticModulusY)).toBeCloseTo(
    ZY,
    NUM_DIGITS
  );
});

test("Build-BOXの単位質量", () => {
  const M = 597.385;
  const NUM_DIGITS = 12;
  expect(B.property(SecPropertyType.MassPerMetre)).toBeCloseTo(M, NUM_DIGITS);
});

test("Build-BOXのiX", () => {
  const IX = 4.007770731642e-1;
  const NUM_DIGITS = 13;
  expect(B.property(SecPropertyType.RadiusOfGyrationX)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
});

test("Build-BOXのiY", () => {
  const IY = 3.16836310923171e-1;
  const NUM_DIGITS = 15;
  expect(B.property(SecPropertyType.RadiusOfGyrationY)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
});

test("Build-BOXのIX", () => {
  const IX = 1.22233541666667e-2;
  const NUM_DIGITS = 16;
  expect(SecBuildBox.secondMomentOfAreaX(B.a, B.b, B.t1, B.t2)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
  expect(B.property(SecPropertyType.SecondMomentOfAreaX)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
});

test("Build-BOXのIY", () => {
  const IY = 7.63931736666666e-3;
  const NUM_DIGITS = 15;
  expect(B.property(SecPropertyType.SecondMomentOfAreaY)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
});
