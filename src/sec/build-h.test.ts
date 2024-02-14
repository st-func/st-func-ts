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
  expect(SecBuildH.property(SecPropertyType.Area, H.a, H.b, H.t1, H.t2)).toBe(
    A
  );
});

test("ビルドHのZY", () => {
  const ZY = 1.55203645833333e-2;
  const NUM_DIGITS = 16;
  expect(SecBuildH.elasticModulusY(H.a, H.b, H.t1, H.t2)).toBeCloseTo(
    ZY,
    NUM_DIGITS
  );
  expect(
    SecBuildH.property(SecPropertyType.ElasticModulusY, H.a, H.b, H.t1, H.t2)
  ).toBeCloseTo(ZY, NUM_DIGITS);
});

test("ビルドHのZZ", () => {
  const ZZ = 1.3366199375e-3;
  const NUM_DIGITS = 17;
  expect(SecBuildH.elasticModulusZ(H.a, H.b, H.t1, H.t2)).toBeCloseTo(
    ZZ,
    NUM_DIGITS
  );
  expect(
    SecBuildH.property(SecPropertyType.ElasticModulusZ, H.a, H.b, H.t1, H.t2)
  ).toBeCloseTo(ZZ, NUM_DIGITS);
});

test("ビルドHの単位質量", () => {
  const M = 328.5225;
  expect(
    SecBuildH.property(SecPropertyType.MassPerMetre, H.a, H.b, H.t1, H.t2)
  ).toBe(M);
});

test("ビルドHのiY", () => {
  const IY = 4.71714095162177e-1;
  const NUM_DIGITS = 15;
  expect(
    SecBuildH.property(SecPropertyType.RadiusOfGyrationY, H.a, H.b, H.t1, H.t2)
  ).toBeCloseTo(IY, NUM_DIGITS);
});

test("ビルドHのiZ", () => {
  const IZ = 7.99229000487988e-2;
  const NUM_DIGITS = 16;
  expect(
    SecBuildH.property(SecPropertyType.RadiusOfGyrationZ, H.a, H.b, H.t1, H.t2)
  ).toBeCloseTo(IZ, NUM_DIGITS);
});

test("ビルドHのIY", () => {
  const IY = 9.31221875e-3;
  const NUM_DIGITS = 17;
  expect(SecBuildH.secondMomentOfAreaY(H.a, H.b, H.t1, H.t2)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
  expect(
    SecBuildH.property(
      SecPropertyType.SecondMomentOfAreaY,
      H.a,
      H.b,
      H.t1,
      H.t2
    )
  ).toBeCloseTo(IY, NUM_DIGITS);
});

test("ビルドHのIZ", () => {
  const IZ = 2.673239875e-4;
  const NUM_DIGITS = 18;
  expect(SecBuildH.secondMomentOfAreaZ(H.a, H.b, H.t1, H.t2)).toBeCloseTo(
    IZ,
    NUM_DIGITS
  );
  expect(
    SecBuildH.property(
      SecPropertyType.SecondMomentOfAreaZ,
      H.a,
      H.b,
      H.t1,
      H.t2
    )
  ).toBeCloseTo(IZ, NUM_DIGITS);
});
