export class Operation {
    id: string;
    amount: number;
    label: string;
    date: number;
    type: string;
    source: string;
    category: string;

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