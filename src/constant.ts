/**
 * 鋼材の密度(kg/m^3)
 */
export const STEEL_DENSITY: number = 7850.0;

/**
 * 断面性能のタイプ
 */
export const enum SecPropertyType {
  Area = "断面積",
  ElasticModulusY = "断面係数Y",
  ElasticModulusZ = "断面係数Z",
  MassPerMetre = "単位質量",
  RadiusOfGyrationY = "断面二次半径Y",
  RadiusOfGyrationZ = "断面二次半径Z",
  SecondMomentOfAreaY = "断面二次モーメントY",
  SecondMomentOfAreaZ = "断面二次モーメントZ",
}
