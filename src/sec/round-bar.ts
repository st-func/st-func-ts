import { SecSteel } from "./steel";
import { Unit } from "../unit";

/**
 * 丸鋼
 */
export class SecRoundBar extends SecSteel {
  /** 形状名 */
  name: string = "";
  /** 直径 R */
  r: number = 0.0;

  /**
   * 寸法により初期化する
   * @param r 直径 R
   */
  setDimensions(r: number) {
    this.r = r;
    const scale: number = Unit.output(1.0, "mm");
    r *= scale;
    this.name = `RB-${r}`;
  }

  /**
   * 断面積
   * @returns 断面積
   */
  area() {
    return SecRoundBar.area(this.r);
  }

  /**
   * Y軸まわりの断面係数
   * @returns Y軸まわりの断面係数
   */
  elasticModulusY(): number {
    return SecRoundBar.elasticModulusY(this.r);
  }

  /**
   * Z軸まわりの断面係数
   * @returns Z軸まわりの断面係数
   */
  elasticModulusZ(): number {
    return SecRoundBar.elasticModulusY(this.r);
  }

  /**
   * Y軸まわりの断面二次モーメント
   * @returns Y軸まわりの断面二次モーメント
   */
  secondMomentOfAreaY(): number {
    return SecRoundBar.secondMomentOfAreaY(this.r);
  }

  /**
   * Z軸まわりの断面二次モーメント
   * @returns Z軸まわりの断面二次モーメント
   */
  secondMomentOfAreaZ(): number {
    return SecRoundBar.secondMomentOfAreaY(this.r);
  }

  /**
   * 丸鋼の断面積
   * 根拠:建築構造ポケットブック第6版 p.34
   * @param r 直径 R
   * @returns 断面積 A
   */
  static area(r: number): number {
    return (Math.PI * r ** 2) / 4.0;
  }

  /**
   * 丸鋼の断面係数（Y軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param r 直径 R
   * @returns 断面係数（Y軸まわり） ZY
   */
  static elasticModulusY(r: number): number {
    return (Math.PI * r ** 3) / 32.0;
  }

  /**
   * 丸鋼の断面二次モーメント（Y軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param r 直径 R
   * @returns 断面二次モーメント（Y軸まわり）IY
   */
  static secondMomentOfAreaY(r: number): number {
    return (Math.PI * r ** 4) / 64.0;
  }
}
