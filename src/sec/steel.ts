import { STEEL_DENSITY } from "../constant";
/**
 * 鉄骨断面に関する関数
 */
export class SecSteel {
  /**
   * 単位質量
   * @param area 断面積
   * @returns 単位質量
   */
  static massPerMetre(area: number): number {
    return STEEL_DENSITY * area;
  }
}
