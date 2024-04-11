import { SecSteel } from "./steel";
import { Unit } from "../unit";

/**
 * 平鋼
 */
export class SecFlatBar extends SecSteel {
  /** 形状名 */
  name: string = "";
  /** 幅 B */
  b: number = 0.0;
  /** 板厚 t */
  t: number = 0.0;

  /**
   * 寸法により初期化し、nameも設定する
   * @param b 幅 B
   * @param t 板厚 t
   */
  setDimensions(b: number, t: number) {
    this.b = b;
    this.t = t;
    const scale: number = Unit.output(1.0, "mm");
    b *= scale;
    t *= scale;
    this.name = `FB-${b}x${t}`;
  }

  /**
   * 断面積
   * @returns 断面積
   */
  area() {
    return SecFlatBar.area(this.b, this.t);
  }

  /**
   * X軸まわりの断面係数
   * @returns X軸まわりの断面係数
   */
  elasticModulusX(): number {
    return SecFlatBar.elasticModulusX(this.b, this.t);
  }

  /**
   * Y軸まわりの断面係数
   * @returns Y軸まわりの断面係数
   */
  elasticModulusY(): number {
    return SecFlatBar.elasticModulusX(this.t, this.b);
  }

  /**
   * X軸まわりの断面二次モーメント
   * @returns X軸まわりの断面二次モーメント
   */
  secondMomentOfAreaX(): number {
    return SecFlatBar.secondMomentOfAreaX(this.b, this.t);
  }

  /**
   * Y軸まわりの断面二次モーメント
   * @returns Y軸まわりの断面二次モーメント
   */
  secondMomentOfAreaY(): number {
    return SecFlatBar.secondMomentOfAreaX(this.t, this.b);
  }

  /**
   * 平鋼の断面積
   * 根拠:建築構造ポケットブック第6版 p.34
   * @param b 幅 B
   * @param t 板厚 t
   * @returns 断面積 A
   */
  static area(b: number, t: number): number {
    return t * b;
  }

  /**
   * 平鋼の断面係数（X軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param b 幅 B
   * @param t 板厚 t
   * @returns 断面係数（X軸まわり） ZX
   */
  static elasticModulusX(b: number, t: number): number {
    return (t * b ** 2) / 6.0;
  }

  /**
   * 平鋼の断面二次モーメント（X軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param b 幅 B
   * @param t 板厚 t
   * @returns 断面二次モーメント（X軸まわり）IX
   */
  static secondMomentOfAreaX(b: number, t: number): number {
    return (t * b ** 3) / 12.0;
  }
}
