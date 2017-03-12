export class Operation {
    id: string;
    amount: number;
    label: string;
    date: number;
    type: number;
    source: string;
    category: number;

    constructor(data: any) {
        this.id = data.id;
        this.amount = data.amount;
        this.label = data.label;
        this.date = data.date;
        this.type = data.type;
        this.source = data.source;
        this.category = data.category;
    }
}

export enum Category {
    Logement,
    Carburant,
    Alimentation,
    Loisirs,
    Autre
}

export enum Type {
    Virement,
    Chèque,
    Espèces,
    Carte,
    Autre
}