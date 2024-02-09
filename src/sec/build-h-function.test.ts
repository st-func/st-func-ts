import { SecBuildHFunction } from "./build-h-function";
import { SectionPropertyType } from "../constant";

test("ビルドHのA", () => {
  expect(SecBuildHFunction.build_h_area(1200, 400, 19, 25)).toBe(41850.0);
  expect(
    SecBuildHFunction.build_h(SectionPropertyType.Area, 1200, 400, 19, 25)
  ).toBe(41850.0);
});

test("ビルドHのIy", () => {
  expect(
    SecBuildHFunction.build_h_second_moment_of_area_y(1200, 400, 19, 25)
  ).toBe(9312218750.0);
  expect(
    SecBuildHFunction.build_h(
      SectionPropertyType.SecondMomentOfAreaY,
      1200,
      400,
      19,
      25
    )
  ).toBe(9312218750.0);
});

test("ビルドHのIz", () => {
  expect(
    SecBuildHFunction.build_h_second_moment_of_area_z(1200, 400, 19, 25)
  ).toBe(267323987.5);
  expect(
    SecBuildHFunction.build_h(
      SectionPropertyType.SecondMomentOfAreaZ,
      1200,
      400,
      19,
      25
    )
  ).toBe(267323987.5);
});
