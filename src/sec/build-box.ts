import { SecSteel } from "./steel";
import { Unit } from "../unit";

/**
 * 組立角形鋼管
 */
export class SecBuildBox extends SecSteel {
  /** 形状名 */
  name: string = "";
  /** 成 A */
  a: number = 0.0;
  /** 幅 B */
  b: number = 0.0;
  /** 成方向の板厚 t1 */
  t1: number = 0.0;
  /** 幅方向の板厚 t2 */
  t2: number = 0.0;

  /**
   * 寸法により初期化し、nameも設定する
   * @param a 成 A
   * @param b 幅 B
   * @param t1 成方向の板厚 t1
   * @param t2 幅方向の板厚 t2
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
    this.name = `BB-${a}x${b}x${t1}x${t2}`;
  }

  /**
   * 断面積
   * @returns 断面積
   */
  area() {
    return SecBuildBox.area(this.a, this.b, this.t1, this.t2);
  }
  /**
   * Y軸まわりの断面係数
   * @returns Y軸まわりの断面係数
   */
  elasticModulusY(): number {
    return SecBuildBox.elasticModulusY(this.a, this.b, this.t1, this.t2);
  }

  /**
   * Z軸まわりの断面係数
   * @returns Z軸まわりの断面係数
   */
  elasticModulusZ(): number {
    return SecBuildBox.elasticModulusY(this.b, this.a, this.t2, this.t1);
  }

  /**
   * Y軸まわりの断面二次モーメント
   * @returns Y軸まわりの断面二次モーメント
   */
  secondMomentOfAreaY(): number {
    return SecBuildBox.secondMomentOfAreaY(this.a, this.b, this.t1, this.t2);
  }

  /**
   * Z軸まわりの断面二次モーメント
   * @returns Z軸まわりの断面二次モーメント
   */
  secondMomentOfAreaZ(): number {
    return SecBuildBox.secondMomentOfAreaY(this.b, this.a, this.t2, this.t1);
  }

  /**
   * 組立角形鋼管の断面積
   * 根拠:建築構造ポケットブック第6版 p.34
   * @param a 成 A
   * @param b 幅 B
   * @param t1 成方向の板厚 t1
   * @param t2 幅方向の板厚 t2
   * @returns 断面積 A
   */
  static area(a: number, b: number, t1: number, t2: number): number {
    return b * a - (b - 2 * t1) * (a - 2 * t2);
  }

  /**
   * 組立角形鋼管の断面係数（Y軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param a 成 A
   * @param b 幅 B
   * @param t1 成方向の板厚 t1
   * @param t2 幅方向の板厚 t2
   * @returns 断面係数（Y軸まわり） ZY
   */
  static elasticModulusY(a: number, b: number, t1: number, t2: number): number {
    return (1.0 / (6.0 * a)) * (b * a ** 3 - (b - 2 * t1) * (a - 2 * t2) ** 3);
  }

  /**
   * 組立角形鋼管の断面二次モーメント（Y軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param a 成 A
   * @param b 幅 B
   * @param t1 成方向の板厚 t1
   * @param t2 幅方向の板厚 t2
   * @returns 断面二次モーメント（Y軸まわり）IY
   */
  static secondMomentOfAreaY(
    a: number,
    b: number,
    t1: number,
    t2: number
  ): number {
    return (1.0 / 12.0) * (b * a ** 3 - (b - 2 * t1) * (a - 2 * t2) ** 3);
  }
}
