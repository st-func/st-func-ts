import { SecSteel } from "./steel";
import { Unit } from "../unit";
/**
 * 円形鋼管
 */
export class SecPipe extends SecSteel {
  /** 形状名 */
  name: string = "";
  /** 直径 D */
  d: number = 0.0;
  /** 板厚 t */
  t: number = 0.0;

  /**
   * 寸法により初期化し、nameも設定する
   * @param d 直径 D
   * @param t 板厚 t
   */
  setDimensions(d: number, t: number) {
    this.d = d;
    this.t = t;
    const scale: number = Unit.output(1.0, "mm");
    d *= scale;
    t *= scale;
    this.name = `P-${d}x${t}`;
  }

  /**
   * 断面積
   * @returns 断面積
   */
  area() {
    return SecPipe.area(this.d, this.t);
  }
  /**
   * Y軸まわりの断面係数
   * @returns Y軸まわりの断面係数
   */
  elasticModulusY(): number {
    return SecPipe.elasticModulusY(this.d, this.t);
  }

  /**
   * Z軸まわりの断面係数
   * @returns Z軸まわりの断面係数
   */
  elasticModulusZ(): number {
    return SecPipe.elasticModulusY(this.d, this.t);
  }

  /**
   * Y軸まわりの断面二次モーメント
   * @returns Y軸まわりの断面二次モーメント
   */
  secondMomentOfAreaY(): number {
    return SecPipe.secondMomentOfAreaY(this.d, this.t);
  }

  /**
   * Z軸まわりの断面二次モーメント
   * @returns Z軸まわりの断面二次モーメント
   */
  secondMomentOfAreaZ(): number {
    return SecPipe.secondMomentOfAreaY(this.d, this.t);
  }

  /**
   * 円形鋼管の断面積
   * 根拠:建築構造ポケットブック第6版 p.35
   * @param d 直径 D
   * @param t 板厚 t
   * @returns 断面積 A
   */
  static area(d: number, t: number): number {
    return (Math.PI / 4.0) * (d ** 2 - (d - 2 * t) ** 2);
  }

  /**
   * 円形鋼管の断面係数（Y軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.35）
   * @param d 直径 D
   * @param t 板厚 t
   * @returns 断面係数（Y軸まわり） ZY
   */
  static elasticModulusY(d: number, t: number): number {
    return (Math.PI / 32.0) * ((d ** 4 - (d - 2 * t) ** 4) / d);
  }

  /**
   * 円形鋼管の断面二次モーメント（Y軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.35）
   * @param d 直径 D
   * @param t 板厚 t
   * @returns 断面二次モーメント（Y軸まわり）IY
   */
  static secondMomentOfAreaY(d: number, t: number): number {
    return (Math.PI / 64.0) * (d ** 4 - (d - 2 * t) ** 4);
  }
}
