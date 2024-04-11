import { SecBuildH } from "./build-h";
import { SecPropertyType } from "../constant";

const H = new SecBuildH();
H.a = 1.2;
H.b = 0.4;
H.t1 = 0.019;
H.t2 = 0.025;

test("SecBuildH.setDimensions", () => {
  const secBuildH = new SecBuildH();
  secBuildH.setDimensions(H.a, H.b, H.t1, H.t2);
  expect(secBuildH.a).toBe(H.a);
  expect(secBuildH.b).toBe(H.b);
  expect(secBuildH.t1).toBe(H.t1);
  expect(secBuildH.t2).toBe(H.t2);
  expect(secBuildH.name).toBe("BH-1200x400x19x25");
});

test("ビルドHのA", () => {
  const A = 4.185e-2;
  expect(SecBuildH.area(H.a, H.b, H.t1, H.t2)).toBe(A);
  expect(H.property(SecPropertyType.Area)).toBe(A);
});

test("ビルドHのZX", () => {
  const ZX = 1.55203645833333e-2;
  const NUM_DIGITS = 16;
  expect(SecBuildH.elasticModulusX(H.a, H.b, H.t1, H.t2)).toBeCloseTo(
    ZX,
    NUM_DIGITS
  );
  expect(H.property(SecPropertyType.ElasticModulusX)).toBeCloseTo(
    ZX,
    NUM_DIGITS
  );
});

test("ビルドHのZY", () => {
  const ZY = 1.3366199375e-3;
  const NUM_DIGITS = 17;
  expect(SecBuildH.elasticModulusY(H.a, H.b, H.t1, H.t2)).toBeCloseTo(
    ZY,
    NUM_DIGITS
  );
  expect(H.property(SecPropertyType.ElasticModulusY)).toBeCloseTo(
    ZY,
    NUM_DIGITS
  );
});

test("ビルドHの単位質量", () => {
  const M = 328.5225;
  expect(H.property(SecPropertyType.MassPerMetre)).toBe(M);
});

test("ビルドHのiX", () => {
  const IX = 4.71714095162177e-1;
  const NUM_DIGITS = 15;
  expect(H.property(SecPropertyType.RadiusOfGyrationX)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
});

test("ビルドHのiY", () => {
  const IY = 7.99229000487988e-2;
  const NUM_DIGITS = 16;
  expect(H.property(SecPropertyType.RadiusOfGyrationY)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
});

test("ビルドHのIX", () => {
  const IX = 9.31221875e-3;
  const NUM_DIGITS = 17;
  expect(SecBuildH.secondMomentOfAreaX(H.a, H.b, H.t1, H.t2)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
  expect(H.property(SecPropertyType.SecondMomentOfAreaX)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
});

test("ビルドHのIY", () => {
  const IY = 2.673239875e-4;
  const NUM_DIGITS = 18;
  expect(SecBuildH.secondMomentOfAreaY(H.a, H.b, H.t1, H.t2)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
  expect(H.property(SecPropertyType.SecondMomentOfAreaY)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
});
