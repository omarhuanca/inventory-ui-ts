export class Line {
    static LINE_CUP = "copas";
    static LINE_PLATE = "platos";

    private name: string;

    constructor(name: string){
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    compareOtherName(potentialName: string): boolean {
        return this.name.trim().toLocaleLowerCase() == potentialName.trim().toLowerCase()
    }
}
