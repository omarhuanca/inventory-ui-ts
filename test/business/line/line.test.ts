import {Line} from "../../../src/business/line/model/Line";

describe("Line suit validation", () => {
    test("verifyCompareNameFailure", () => {
        const line = new Line(Line.LINE_PLATE);

        expect(line.compareOtherName(Line.LINE_CUP)).toBeFalsy();
    });
    test("verifyCompareNameSuccess", () => {
        const line = new Line(Line.LINE_PLATE);

        expect(line.compareOtherName("              PlaTos       ")).toBeTruthy();
    });
});
