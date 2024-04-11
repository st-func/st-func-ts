import { SecPropertyType, STEEL_DENSITY } from "../constant";
/**
 * 鉄骨断面に関する関数
 */
export class SecSteel {
  /**
   * 断面積
   * @returns 断面積
   */
  area(): number {
    throw new Error("このメソッドは未実装です");
  }

  /**
   * X軸まわりの断面係数
   * @returns X軸まわりの断面係数
   */
  elasticModulusX(): number {
    throw new Error("このメソッドは未実装です");
  }

  /**
   * Y軸まわりの断面係数
   * @returns Y軸まわりの断面係数
   */
  elasticModulusY(): number {
    throw new Error("このメソッドは未実装です");
  }

  /**
   * 単位質量
   * @returns 単位質量
   */
  massPerMetre(): number {
    return SecSteel.massPerMetre(this.area());
  }

  /**
   * 断面性能
   * @param propertyType 出力する断面性能のタイプ
   * @returns 断面性能
   */
  property(propertyType: SecPropertyType): number {
    switch (propertyType) {
      case SecPropertyType.Area:
        return this.area();
      case SecPropertyType.ElasticModulusX:
        return this.elasticModulusX();
      case SecPropertyType.ElasticModulusY:
        return this.elasticModulusY();
      case SecPropertyType.MassPerMetre:
        return this.massPerMetre();
      case SecPropertyType.RadiusOfGyrationX:
        return this.radiusOfGyrationX();
      case SecPropertyType.RadiusOfGyrationY:
        return this.radiusOfGyrationY();
      case SecPropertyType.SecondMomentOfAreaX:
        return this.secondMomentOfAreaX();
      case SecPropertyType.SecondMomentOfAreaY:
        return this.secondMomentOfAreaY();
      default:
        throw new Error("実装していない断面性能タイプです");
    }
  }

  /**
   * X軸まわりの断面二次半径
   * @returns X軸まわりの断面二次半径
   */
  radiusOfGyrationX(): number {
    return SecSteel.radiusOfGyration(this.area(), this.secondMomentOfAreaX());
  }

  /**
   * Y軸まわりの断面二次半径
   * @returns Y軸まわりの断面二次半径
   */
  radiusOfGyrationY(): number {
    return SecSteel.radiusOfGyration(this.area(), this.secondMomentOfAreaY());
  }

  /**
   * X軸まわりの断面二次モーメント
   * @returns X軸まわりの断面二次モーメント
   */
  secondMomentOfAreaX(): number {
    throw new Error("このメソッドは未実装です");
  }

  /**
   * Y軸まわりの断面二次モーメント
   * @returns Y軸まわりの断面二次モーメント
   */
  secondMomentOfAreaY(): number {
    throw new Error("このメソッドは未実装です");
  }

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
