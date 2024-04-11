import { SecSteel } from "./steel";
import { Unit } from "../unit";
/**
 * 組立H形鋼
 */
export class SecBuildH extends SecSteel {
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
   * 断面積
   * @returns 断面積
   */
  area() {
    return SecBuildH.area(this.a, this.b, this.t1, this.t2);
  }
  /**
   * X軸まわりの断面係数
   * @returns X軸まわりの断面係数
   */
  elasticModulusX(): number {
    return SecBuildH.elasticModulusX(this.a, this.b, this.t1, this.t2);
  }

  /**
   * Y軸まわりの断面係数
   * @returns Y軸まわりの断面係数
   */
  elasticModulusY(): number {
    return SecBuildH.elasticModulusY(this.a, this.b, this.t1, this.t2);
  }

  /**
   * X軸まわりの断面二次モーメント
   * @returns X軸まわりの断面二次モーメント
   */
  secondMomentOfAreaX(): number {
    return SecBuildH.secondMomentOfAreaX(this.a, this.b, this.t1, this.t2);
  }

  /**
   * Y軸まわりの断面二次モーメント
   * @returns Y軸まわりの断面二次モーメント
   */
  secondMomentOfAreaY(): number {
    return SecBuildH.secondMomentOfAreaY(this.a, this.b, this.t1, this.t2);
  }

  /**
   * 組立H形鋼の断面積
   * 根拠:建築構造ポケットブック第6版 p.34
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
   * 組立H形鋼の断面係数（X軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param a 成 A
   * @param b フランジ幅 B
   * @param t1 ウェブ厚 t1
   * @param t2 フランジ厚 t2
   * @returns 断面係数（X軸まわり） ZX
   */
  static elasticModulusX(a: number, b: number, t1: number, t2: number): number {
    return (1.0 / (6.0 * a)) * (b * a ** 3 - (b - t1) * (a - 2 * t2) ** 3);
  }

  /**
   * 組立H形鋼の断面係数（Y軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param a 成 A
   * @param b フランジ幅 B
   * @param t1 ウェブ厚 t1
   * @param t2 フランジ厚 t2
   * @returns 断面係数（Y軸まわり） ZY
   */
  static elasticModulusY(a: number, b: number, t1: number, t2: number): number {
    return (1.0 / (6.0 * b)) * (2 * t2 * b ** 3 + (a - 2 * t2) * t1 ** 3);
  }

  /**
   * 組立H形鋼の断面二次モーメント（X軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param a 成 A
   * @param b フランジ幅 B
   * @param t1 ウェブ厚 t1
   * @param t2 フランジ厚 t2
   * @returns 断面二次モーメント（X軸まわり）IX
   */
  static secondMomentOfAreaX(
    a: number,
    b: number,
    t1: number,
    t2: number
  ): number {
    return (1.0 / 12.0) * (b * a ** 3 - (b - t1) * (a - 2 * t2) ** 3);
  }
  /**
   * 組立H形鋼の断面二次モーメント（Y軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param a 成 A
   * @param b フランジ幅 B
   * @param t1 ウェブ厚 t1
   * @param t2 フランジ厚 t2
   * @returns 断面二次モーメント（Y軸まわり） IY
   */
  static secondMomentOfAreaY(
    a: number,
    b: number,
    t1: number,
    t2: number
  ): number {
    return (1.0 / 12.0) * (2 * t2 * b ** 3 + (a - 2 * t2) * t1 ** 3);
  }
}
