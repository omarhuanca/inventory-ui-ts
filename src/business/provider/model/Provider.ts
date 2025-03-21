export class Provider {
    static JUAN_PEREZ = "Juan Perez";
    static JUAN_PEREZ_CELLPHONE = "71476576";

    private name: string;
    private cellphoneNumber: string;

    constructor(name: string, cellphoneNumber: string){
        this.name = name;
        this.cellphoneNumber = cellphoneNumber;
    }

    getName(): string {
        return this.name;
    }

    getCellPhoneNumber(): string {
        return this.cellphoneNumber;
    }

    compareOtherName(potentialName: string): boolean {
        return this.name.trim().toLocaleLowerCase() == potentialName.trim().toLocaleLowerCase()
    }
}
