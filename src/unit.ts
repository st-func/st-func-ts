/**
 * 単位に関するクラス
 */
export class Unit {
  /**
   * 単位変換のための係数を算出する関数
   * @param unit 単位の文字列
   * @returns 単位変換でかける係数
   */
  private static factor(unit: string): number {
    //基本単位の係数
    const standardUnits: { [unit: string]: number } = {
      g: 0.001, //質量（kgを基本単位とするので、0.001とする）
      m: 1.0, //長さ
      N: 1.0, //力
      s: 1.0, //時間
    };
    if (unit in standardUnits) {
      return standardUnits[unit];
    }

    //接頭辞がついた場合の処理
    const prefixs: { [prefix: string]: number } = {
      Q: 1.0e30,
      R: 1.0e27,
      Y: 1.0e24,
      Z: 1.0e21,
      E: 1.0e18,
      P: 1.0e15,
      T: 1.0e12,
      G: 1.0e9,
      M: 1.0e6,
      k: 1.0e3,
      h: 1.0e2,
      da: 1.0e1,
      d: 1.0e-1,
      c: 1.0e-2,
      m: 1.0e-3,
      μ: 1.0e-6,
      n: 1.0e-9,
      p: 1.0e-12,
      f: 1.0e-15,
      a: 1.0e-18,
      z: 1.0e-21,
      y: 1.0e-24,
      r: 1.0e-27,
      q: 1.0e-30,
    };
    const keyStandardUnits = Object.keys(standardUnits).join("|");
    const keyPrefixs = Object.keys(prefixs).join("|");
    let regexPattern = new RegExp(`\^(${keyPrefixs})(${keyStandardUnits})\$`);
    let matchResult = unit.match(regexPattern);
    if (matchResult) {
      return prefixs[matchResult[1]] * standardUnits[matchResult[2]];
    }

    //組立単位

    //分数の単位
    regexPattern = /^([^\/]+)\/([^\/]+)$/;
    matchResult = unit.match(regexPattern);
    if (matchResult) {
      try {
        return this.factor(matchResult[1]) / this.factor(matchResult[2]);
      } catch (error) {}
    }

    //累乗の単位
    regexPattern = /^([^\^]+)\^(\d+)$/;
    matchResult = unit.match(regexPattern);
    if (matchResult) {
      try {
        return this.factor(matchResult[1]) ** parseInt(matchResult[2]);
      } catch (error) {}
    }
    throw new Error(`[${unit}]は対応していない単位です。`);
  }

  /**
   * 単位付き数値を計算用数値へ変換する
   * @param value 単位付き数値
   * @param unit_from 単位
   * @returns 計算用数値
   */
  static in(value: number, unit_from: string): number {
    return value * this.factor(unit_from);
  }

  /**
   * 計算用の数値を単位付き数値へ変換する
   * @param value 計算用数値
   * @param unit_to 単位
   * @returns 単位付き数値
   */
  static out(value: number, unit_to: string): number {
    return value / this.factor(unit_to);
  }
}
