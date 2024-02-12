import { SecBuildH } from "./build-h";
import { SecPropertyType } from "../constant";

test("ビルドHのA", () => {
  const H = 1.2;
  const B = 0.4;
  const T1 = 0.019;
  const T2 = 0.025;
  const A = 4.185e-2;
  expect(SecBuildH.area(H, B, T1, T2)).toBe(A);
  expect(SecBuildH.property(SecPropertyType.Area, H, B, T1, T2)).toBe(A);
});

test("ビルドHの単位質量", () => {
  const H = 1.2;
  const B = 0.4;
  const T1 = 0.019;
  const T2 = 0.025;
  const M = 328.5225;
  expect(SecBuildH.property(SecPropertyType.MassPerMetre, H, B, T1, T2)).toBe(
    M
  );
});

test("ビルドHのIy", () => {
  const H = 1.2;
  const B = 0.4;
  const T1 = 0.019;
  const T2 = 0.025;
  const IY = 9.31221875e-3;
  const NUM_DIGITS = 17;
  expect(SecBuildH.secondMomentOfAreaY(H, B, T1, T2)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
  expect(
    SecBuildH.property(SecPropertyType.SecondMomentOfAreaY, H, B, T1, T2)
  ).toBeCloseTo(IY, NUM_DIGITS);
});

test("ビルドHのIz", () => {
  const H = 1.2;
  const B = 0.4;
  const T1 = 0.019;
  const T2 = 0.025;
  const IZ = 2.673239875e-4;
  const NUM_DIGITS = 18;
  expect(SecBuildH.secondMomentOfAreaZ(H, B, T1, T2)).toBeCloseTo(
    IZ,
    NUM_DIGITS
  );
  expect(
    SecBuildH.property(SecPropertyType.SecondMomentOfAreaZ, H, B, T1, T2)
  ).toBeCloseTo(IZ, NUM_DIGITS);
});
