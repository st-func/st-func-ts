/**
 * 鋼材の密度(kg/m^3)
 */
export const STEEL_DENSITY: number = 7850.0;

/**
 * 断面性能のタイプ
 */
export const enum SectionPropertyType {
  Area = "断面積",
  MassPerMetre = "単位質量",
  SecondMomentOfAreaY = "断面二次モーメントY",
  SecondMomentOfAreaZ = "断面二次モーメントZ",
}
