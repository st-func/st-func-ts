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
   * X軸まわりの断面係数
   * @returns X軸まわりの断面係数
   */
  elasticModulusX(): number {
    return SecRoundBar.elasticModulusX(this.r);
  }

  /**
   * Y軸まわりの断面係数
   * @returns Y軸まわりの断面係数
   */
  elasticModulusY(): number {
    return SecRoundBar.elasticModulusX(this.r);
  }

  /**
   * X軸まわりの断面二次モーメント
   * @returns X軸まわりの断面二次モーメント
   */
  secondMomentOfAreaX(): number {
    return SecRoundBar.secondMomentOfAreaX(this.r);
  }

  /**
   * Y軸まわりの断面二次モーメント
   * @returns Y軸まわりの断面二次モーメント
   */
  secondMomentOfAreaY(): number {
    return SecRoundBar.secondMomentOfAreaX(this.r);
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
   * 丸鋼の断面係数（X軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param r 直径 R
   * @returns 断面係数（X軸まわり） ZX
   */
  static elasticModulusX(r: number): number {
    return (Math.PI * r ** 3) / 32.0;
  }

  /**
   * 丸鋼の断面二次モーメント（X軸まわり）
   * （根拠:建築構造ポケットブック第6版 p.34）
   * @param r 直径 R
   * @returns 断面二次モーメント（X軸まわり）IX
   */
  static secondMomentOfAreaX(r: number): number {
    return (Math.PI * r ** 4) / 64.0;
  }
}
