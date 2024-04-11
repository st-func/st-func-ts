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
  expect(SecPipe.elasticModulusX(P.d, P.t)).toBeCloseTo(Z, NUM_DIGITS);
  expect(P.property(SecPropertyType.ElasticModulusX)).toBeCloseTo(
    Z,
    NUM_DIGITS
  );
  expect(P.property(SecPropertyType.ElasticModulusY)).toBeCloseTo(
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
  const IX = 1.76451834787854e-1;
  const NUM_DIGITS = 14;
  expect(P.property(SecPropertyType.RadiusOfGyrationX)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
  expect(P.property(SecPropertyType.RadiusOfGyrationY)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
});

test("PipeのI", () => {
  const IX = 4.39283898550558e-4;
  const NUM_DIGITS = 17;
  expect(SecPipe.secondMomentOfAreaX(P.d, P.t)).toBeCloseTo(IX, NUM_DIGITS);
  expect(P.property(SecPropertyType.SecondMomentOfAreaX)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
  expect(P.property(SecPropertyType.SecondMomentOfAreaY)).toBeCloseTo(
    IX,
    NUM_DIGITS
  );
});
