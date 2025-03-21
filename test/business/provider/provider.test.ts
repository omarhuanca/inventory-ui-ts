import {Provider} from "../../../src/business/provider/model/Provider";

describe("Provider suit validation", () => {
    test("verifyCompareNameWithSpace", () => {
        const provider = new Provider(Provider.JUAN_PEREZ, Provider.JUAN_PEREZ_CELLPHONE);

        expect(provider.compareOtherName("            JUAN PEREZ        ")).toBeTruthy();
    });
    test("verifyCompareNameLowercase", () => {
        const provider = new Provider(Provider.JUAN_PEREZ, Provider.JUAN_PEREZ_CELLPHONE);

        expect(provider.compareOtherName("    juan    perez    ")).toBeFalsy();
    });
});