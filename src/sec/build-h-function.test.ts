import { SecBuildHFunction } from "./build-h-function";
import { SectionPropertyType } from "../constant";

test("ビルドHのA", () => {
  const H = 1.2;
  const B = 0.4;
  const T1 = 0.019;
  const T2 = 0.025;
  const A = 4.185e-2;
  expect(SecBuildHFunction.buildHArea(H, B, T1, T2)).toBe(A);
  expect(SecBuildHFunction.buildH(SectionPropertyType.Area, H, B, T1, T2)).toBe(
    A
  );
});

test("ビルドHのIy", () => {
  const H = 1.2;
  const B = 0.4;
  const T1 = 0.019;
  const T2 = 0.025;
  const IY = 9.31221875e-3;
  const NUM_DIGITS = 17;
  expect(SecBuildHFunction.buildHSecondMomentOfAreaY(H, B, T1, T2)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
  expect(
    SecBuildHFunction.buildH(
      SectionPropertyType.SecondMomentOfAreaY,
      H,
      B,
      T1,
      T2
    )
  ).toBeCloseTo(IY, NUM_DIGITS);
});

test("ビルドHのIz", () => {
  const H = 1.2;
  const B = 0.4;
  const T1 = 0.019;
  const T2 = 0.025;
  const IZ = 2.673239875e-4;
  const NUM_DIGITS = 18;
  expect(SecBuildHFunction.buildHSecondMomentOfAreaZ(H, B, T1, T2)).toBeCloseTo(
    IZ,
    NUM_DIGITS
  );
  expect(
    SecBuildHFunction.buildH(
      SectionPropertyType.SecondMomentOfAreaZ,
      H,
      B,
      T1,
      T2
    )
  ).toBeCloseTo(IZ, NUM_DIGITS);
});
