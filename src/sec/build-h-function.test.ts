import { SecBuildHFunction } from "./build-h-function";
import { SectionPropertyType } from "../constant";

test("ビルドHのA", () => {
  const H = 1.2;
  const B = 0.4;
  const T1 = 0.019;
  const T2 = 0.025;
  const A = 4.185e-2;
  expect(SecBuildHFunction.build_h_area(H, B, T1, T2)).toBe(A);
  expect(
    SecBuildHFunction.build_h(SectionPropertyType.Area, H, B, T1, T2)
  ).toBe(A);
});

test("ビルドHのIy", () => {
  const H = 1.2;
  const B = 0.4;
  const T1 = 0.019;
  const T2 = 0.025;
  const IY = 9.31221875e-3;
  const NUM_DIGITS = 17;
  expect(
    SecBuildHFunction.build_h_second_moment_of_area_y(H, B, T1, T2)
  ).toBeCloseTo(IY, NUM_DIGITS);
  expect(
    SecBuildHFunction.build_h(
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
  expect(
    SecBuildHFunction.build_h_second_moment_of_area_z(H, B, T1, T2)
  ).toBeCloseTo(IZ, NUM_DIGITS);
  expect(
    SecBuildHFunction.build_h(
      SectionPropertyType.SecondMomentOfAreaZ,
      H,
      B,
      T1,
      T2
    )
  ).toBeCloseTo(IZ, NUM_DIGITS);
});
