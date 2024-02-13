import { SecPropertyType } from "../constant";
import { SecSteel } from "./steel";
import { Unit } from "../unit";
/**
 * 組立H形鋼
 */
export class SecBuildH {
  /** 形状名 */
  name: string = "";
  /** 成 A */
  a: number = 0.0;
  /** フランジ幅 B */
  b: number = 0.0;
  /** ウェブ厚 t1 */
  t1: number = 0.0;
  /** フランジ厚 t2 */
  t2: number = 0.0;

  /**
   * 寸法により初期化し、nameも設定する
   * @param a 成A
   * @param b フランジ幅 B
   * @param t1 ウェブ厚 t1
   * @param t2 フランジ厚 t2
   */
  setDimensions(a: number, b: number, t1: number, t2: number) {
    this.a = a;
    this.b = b;
    this.t1 = t1;
    this.t2 = t2;
    const scale: number = Unit.output(1.0, "mm");
    a *= scale;
    b *= scale;
    t1 *= scale;
    t2 *= scale;
    this.name = `BH-${a}x${b}x${t1}x${t2}`;
  }

  /**
   * 組立H形鋼の断面積
   * @param a 成 A
   * @param b フランジ幅 B
   * @param t1 ウェブ厚 t1
   * @param t2 フランジ厚 t2
   * @returns 断面積 A
   */
  static area(a: number, b: number, t1: number, t2: number): number {
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
  static secondMomentOfAreaY(
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
  static secondMomentOfAreaZ(
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
  static property(
    propertyType: SecPropertyType,
    a: number,
    b: number,
    t1: number,
    t2: number
  ): number {
    switch (propertyType) {
      case SecPropertyType.Area:
        return SecBuildH.area(a, b, t1, t2);
      case SecPropertyType.MassPerMetre:
        return SecSteel.massPerMetre(SecBuildH.area(a, b, t1, t2));
      case SecPropertyType.SecondMomentOfAreaY:
        return SecBuildH.secondMomentOfAreaY(a, b, t1, t2);
      case SecPropertyType.SecondMomentOfAreaZ:
        return SecBuildH.secondMomentOfAreaZ(a, b, t1, t2);
      default:
        throw new Error("実装していない断面性能です。");
    }
  }
}
