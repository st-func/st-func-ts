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

test("ビルドHの単位質量", () => {
  const M = 328.5225;
  expect(
    SecBuildH.property(SecPropertyType.MassPerMetre, H.a, H.b, H.t1, H.t2)
  ).toBe(M);
});

test("ビルドHのIy", () => {
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

test("ビルドHのIz", () => {
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
