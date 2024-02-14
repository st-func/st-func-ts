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

  /**
   * 断面二次半径
   * （根拠:建築構造ポケットブック第6版 p.33）
   * @param area 断面積
   * @param secondMomentOfArea 断面二次モーメント
   * @returns 断面二次半径
   */
  static radiusOfGyration(area: number, secondMomentOfArea: number): number {
    return Math.sqrt(secondMomentOfArea / area);
  }
}
