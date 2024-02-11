import { Unit } from "./unit";
test("単位の係数取得", () => {
  let unitClass = Unit as any;
  //基本単位
  expect(unitClass.factor("g")).toBe(0.001);
  expect(unitClass.factor("m")).toBe(1.0);
  expect(unitClass.factor("N")).toBe(1.0);
  expect(unitClass.factor("s")).toBe(1.0);
  //接頭辞
  expect(unitClass.factor("kg")).toBe(1.0);
  expect(unitClass.factor("kN")).toBe(1000.0);
  expect(unitClass.factor("cm")).toBe(0.01);
  expect(unitClass.factor("mm")).toBe(0.001);
  //組立単位（割り算）
  expect(unitClass.factor("kN/m")).toBe(1000.0);
  expect(unitClass.factor("m/s")).toBe(1.0);
  //組立単位（累乗）
  expect(unitClass.factor("mm^2")).toBe(1.0e-6);
  expect(unitClass.factor("mm^4")).toBeCloseTo(1.0e-12, 26);
  //組立単位（累乗+割り算併用）
  expect(unitClass.factor("N/mm^2")).toBe(1.0e6);
  expect(unitClass.factor("cm/s^2")).toBe(0.01);
  //対応していない単位
  expect(() => unitClass.factor("aaa")).toThrow();
  expect(() => unitClass.factor("m/aaa")).toThrow();
  expect(() => unitClass.factor("m^aaa")).toThrow();
});

test("単位の変換", () => {
  //入力
  expect(Unit.in(5.0, "m")).toBe(5.0);
  expect(Unit.in(5.0, "mm")).toBe(0.005);
  expect(Unit.in(5.0, "kg")).toBe(5.0);
  expect(Unit.in(5.0, "kN")).toBe(5000.0);
  expect(Unit.in(5.0, "kN/m")).toBe(5000.0);
  expect(Unit.in(5.0, "mm^2")).toBeCloseTo(5e-6, 20);
  expect(Unit.in(5.0, "N/mm^2")).toBe(5e6);
  //出力
  expect(Unit.out(5.0, "m")).toBe(5.0);
  expect(Unit.out(5.0, "mm")).toBe(5000.0);
  expect(Unit.out(5.0, "kg")).toBe(5.0);
  expect(Unit.out(5.0, "kN")).toBe(0.005);
  expect(Unit.out(5.0, "kN/m")).toBe(0.005);
  expect(Unit.out(5.0, "mm^2")).toBe(5e6);
  expect(Unit.out(5.0, "N/mm^2")).toBe(5e-6);
});
