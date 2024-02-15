import { SecPipe } from "./pipe";
import { SecPropertyType } from "../constant";

const P = new SecPipe();
P.d = 0.508;
P.t = 0.009;

test("SecPipe.setDimensions", () => {
  const secPipe = new SecPipe();
  secPipe.setDimensions(P.d, P.t);
  expect(secPipe.d).toBe(P.d);
  expect(secPipe.t).toBe(P.t);
  expect(secPipe.name).toBe("P-508x9");
});

test("PipeのA", () => {
  const A = 1.41088926072718e-2;
  const NUM_DIGITS = 15;
  expect(SecPipe.area(P.d, P.t)).toBeCloseTo(A, NUM_DIGITS);
  expect(P.property(SecPropertyType.Area)).toBeCloseTo(A, NUM_DIGITS);
});

test("PipeのZ", () => {
  const Z = 1.72946416752188e-3;
  const NUM_DIGITS = 16;
  expect(SecPipe.elasticModulusY(P.d, P.t)).toBeCloseTo(Z, NUM_DIGITS);
  expect(P.property(SecPropertyType.ElasticModulusY)).toBeCloseTo(
    Z,
    NUM_DIGITS
  );
  expect(P.property(SecPropertyType.ElasticModulusZ)).toBeCloseTo(
    Z,
    NUM_DIGITS
  );
});

test("Pipeの単位質量", () => {
  const M = 1.10754806967083e2;
  const NUM_DIGITS = 10;
  expect(P.property(SecPropertyType.MassPerMetre)).toBeCloseTo(M, NUM_DIGITS);
});

test("Pipeのi", () => {
  const IY = 1.76451834787854e-1;
  const NUM_DIGITS = 14;
  expect(P.property(SecPropertyType.RadiusOfGyrationY)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
  expect(P.property(SecPropertyType.RadiusOfGyrationZ)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
});

test("PipeのI", () => {
  const IY = 4.39283898550558e-4;
  const NUM_DIGITS = 17;
  expect(SecPipe.secondMomentOfAreaY(P.d, P.t)).toBeCloseTo(IY, NUM_DIGITS);
  expect(P.property(SecPropertyType.SecondMomentOfAreaY)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
  expect(P.property(SecPropertyType.SecondMomentOfAreaZ)).toBeCloseTo(
    IY,
    NUM_DIGITS
  );
});
