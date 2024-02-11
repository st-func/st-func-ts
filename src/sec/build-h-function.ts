import { SectionPropertyType } from "../constant";
/**
 * 組立H形鋼の断面性能を計算する関数集
 */
export class SecBuildHFunction {
  /**
   * 組立H形鋼の断面積
   * @param a 成 A
   * @param b フランジ幅 B
   * @param t1 ウェブ厚 t1
   * @param t2 フランジ厚 t2
   * @returns 断面積 A
   */
  static buildHArea(a: number, b: number, t1: number, t2: number): number {
    return a * b - (a - 2 * t2) * (b - t1);
  }
  /**
   * 組立H形鋼の断面二次モーメント（強軸）
   * @param a 成 A
   * @param b フランジ幅 B
   * @param t1 ウェブ厚 t1
   * @param t2 フランジ厚 t2
   * @returns 断面二次モーメント（強軸）Iy
   */
  static buildHSecondMomentOfAreaY(
    a: number,
    b: number,
    t1: number,
    t2: number
  ): number {
    return (b * a ** 3 - (b - t1) * (a - 2 * t2) ** 3) / 12.0;
  }
  /**
   * 組立H形鋼の断面二次モーメント（弱軸）
   * @param a 成 A
   * @param b フランジ幅 B
   * @param t1 ウェブ厚 t1
   * @param t2 フランジ厚 t2
   * @returns 断面二次モーメント（弱軸） Iz
   */
  static buildHSecondMomentOfAreaZ(
    a: number,
    b: number,
    t1: number,
    t2: number
  ): number {
    return (t2 * 2 * b ** 3 + (a - 2 * t2) * t1 ** 3) / 12.0;
  }
  /**
   * 組立H形鋼の断面性能
   * @param propertyType 出力する断面性能のタイプ
   * @param a 成 A
   * @param b フランジ幅 B
   * @param t1 ウェブ厚 t1
   * @param t2 フランジ厚 t2
   * @returns 断面性能
   */
  static buildH(
    propertyType: SectionPropertyType,
    a: number,
    b: number,
    t1: number,
    t2: number
  ): number {
    switch (propertyType) {
      case SectionPropertyType.Area:
        return SecBuildHFunction.buildHArea(a, b, t1, t2);
      case SectionPropertyType.SecondMomentOfAreaY:
        return SecBuildHFunction.buildHSecondMomentOfAreaY(a, b, t1, t2);
      case SectionPropertyType.SecondMomentOfAreaZ:
        return SecBuildHFunction.buildHSecondMomentOfAreaZ(a, b, t1, t2);
      default:
        throw new Error("実装していない断面性能です。");
    }
  }
}
