/**
 * 鋼材の密度(kg/m^3)
 */
export const STEEL_DENSITY: number = 7850.0;

/**
 * 断面性能のタイプ
 */
export enum SecPropertyType {
  Area = "断面積",
  ElasticModulusX = "断面係数X",
  ElasticModulusY = "断面係数Y",
  MassPerMetre = "単位質量",
  RadiusOfGyrationX = "断面二次半径X",
  RadiusOfGyrationY = "断面二次半径Y",
  SecondMomentOfAreaX = "断面二次モーメントX",
  SecondMomentOfAreaY = "断面二次モーメントY",
}

/**
 * 断面形状のタイプ
 */
export enum SecShapeType {
  BuildBox = "組立角形鋼管",
  BuildH = "組立H形鋼",
  FlatBar = "平鋼",
  Pipe = "円形鋼管",
  RoundBar = "丸鋼",
}
