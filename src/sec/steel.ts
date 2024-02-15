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
   * Y軸まわりの断面係数
   * @returns Y軸まわりの断面係数
   */
  elasticModulusY(): number {
    throw new Error("このメソッドは未実装です");
  }

  /**
   * Z軸まわりの断面係数
   * @returns Z軸まわりの断面係数
   */
  elasticModulusZ(): number {
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
      case SecPropertyType.ElasticModulusY:
        return this.elasticModulusY();
      case SecPropertyType.ElasticModulusZ:
        return this.elasticModulusZ();
      case SecPropertyType.MassPerMetre:
        return this.massPerMetre();
      case SecPropertyType.RadiusOfGyrationY:
        return this.radiusOfGyrationY();
      case SecPropertyType.RadiusOfGyrationZ:
        return this.radiusOfGyrationZ();
      case SecPropertyType.SecondMomentOfAreaY:
        return this.secondMomentOfAreaY();
      case SecPropertyType.SecondMomentOfAreaZ:
        return this.secondMomentOfAreaZ();
      default:
        throw new Error("実装していない断面性能タイプです");
    }
  }

  /**
   * Y軸まわりの断面二次半径
   * @returns Y軸まわりの断面二次半径
   */
  radiusOfGyrationY(): number {
    return SecSteel.radiusOfGyration(this.area(), this.secondMomentOfAreaY());
  }

  /**
   * Z軸まわりの断面二次半径
   * @returns Z軸まわりの断面二次半径
   */
  radiusOfGyrationZ(): number {
    return SecSteel.radiusOfGyration(this.area(), this.secondMomentOfAreaZ());
  }

  /**
   * Y軸まわりの断面二次モーメント
   * @returns Y軸まわりの断面二次モーメント
   */
  secondMomentOfAreaY(): number {
    throw new Error("このメソッドは未実装です");
  }

  /**
   * Z軸まわりの断面二次モーメント
   * @returns Z軸まわりの断面二次モーメント
   */
  secondMomentOfAreaZ(): number {
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
