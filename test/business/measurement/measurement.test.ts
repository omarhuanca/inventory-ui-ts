import {Measurement} from "../../../src/business/measurement/model/Measurement";

describe("Measurement suit validation", () => {
    test("verifyCompareCodeSuccess", () => {
        const measurement = new Measurement(Measurement.CODE_PZA);

        expect(measurement.compareOtherCode(Measurement.CODE_PZA)).toBeTruthy();
    });
    test("verifyCompareCodeFailure", () => {
        const measurement = new Measurement("PZA");

        expect(measurement.compareOtherCode("DOC")).toBeFalsy();
    });
    test("verifyCompareCodeSuccessLowercase", () => {
        const measurement = new Measurement(Measurement.CODE_PZA);

        expect(measurement.compareOtherCode("pza")).toBeTruthy();
    });
    test("verifyCompareCodeSuccessBlankSpace", () => {
        const measurement = new Measurement(Measurement.CODE_PZA);

        expect(measurement.compareOtherCode("       pza           ")).toBeTruthy();
    });
});
