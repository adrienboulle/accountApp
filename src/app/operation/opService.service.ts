import { Injectable } from '@angular/core';
import { Operation } from '../operation/operation';

@Injectable()
export class OperationService {
    private currentOp: Operation;

    private categories: string[] = [
        'Logement',
        'Carburant',
        'Alimentation',
        'Loisirs',
        'Autre'
    ];

    private types: string[] = [
        'Virement',
        'Chèque',
        'Espèces',
        'Carte',
        'Autre'
    ];
    
    private ops: Operation[] = [
        new Operation({
            id: '1',
            amount: 18,
            label: 'cinema',
            date: (new Date(2016, 11, 29)).getTime(),
            type: this.types[3],
            source: 'outcome',
            category: this.categories[3],
        }),
        new Operation({
            id: '2',
            amount: 55,
            label: 'courses',
            date: (new Date(2017, 0, 2)).getTime(),
            type: this.types[2],
            source: 'outcome',
            category: this.categories[2],
        }),
        new Operation({
            id: '3',
            amount: 22,
            label: 'bar',
            date: (new Date(2017, 0, 5)).getTime(),
            type: this.types[3],
            source: 'outcome',
            category: this.categories[3],
        }),
        new Operation({
            id: '4',
            amount: 150,
            label: 'anniv',
            date: (new Date(2017, 0, 15)).getTime(),
            type: this.types[0],
            source: 'income',
            category: this.categories[3],
        }),
        new Operation({
            id: '5',
            amount: 1850,
            label: 'salaire',
            date: (new Date(2017, 0, 31)).getTime(),
            type: this.types[0],
            source: 'income',
            category: this.categories[4],
        }),
        new Operation({
            id: '6',
            amount: 45,
            label: 'vente jeu',
            date: (new Date(2017, 1, 8)).getTime(),
            type: this.types[2],
            source: 'income',
            category: this.categories[4],
        }),
        new Operation({
            id: '7',
            amount: 32,
            label: 'plante',
            date: (new Date(2017, 1, 15)).getTime(),
            type: this.types[3],
            source: 'outcome',
            category: this.categories[0],
        }),
        new Operation({
            id: '8',
            amount: 40,
            label: 'essence',
            date: (new Date(2017, 1, 22)).getTime(),
            type: this.types[3],
            source: 'outcome',
            category: this.categories[1],
        }),
        new Operation({
            id: '9',
            amount: 29,
            label: 'resto',
            date: (new Date(2017, 1, 25)).getTime(),
            type: this.types[1],
            source: 'outcome',
            category: this.categories[3],
        }),
        new Operation({
            id: '10',
            amount: 15,
            label: 'remboursement',
            date: (new Date(2017, 1, 25)).getTime(),
            type: this.types[1],
            source: 'income',
            category: this.categories[4],
        }),
        new Operation({
            id: '11',
            amount: 350,
            label: 'loyer',
            date: (new Date(2017, 1, 28)).getTime(),
            type: this.types[2],
            source: 'outcome',
            category: this.categories[2],
        }),
        new Operation({
            id: '12',
            amount: 150,
            label: 'courses',
            date: (new Date(2017, 2, 3)).getTime(),
            type: this.types[3],
            source: 'outcome',
            category: this.categories[2],
        }),
        new Operation({
            id: '13',
            amount: 95,
            label: 'depot',
            date: (new Date(2017, 2, 5, )).getTime(),
            type: this.types[1],
            source: 'income',
            category: this.categories[4],
        }),
        new Operation({
            id: '14',
            amount: 53,
            label: 'soirée',
            date: (new Date(2017, 2, 9)).getTime(),
            type: this.types[2],
            source: 'outcome',
            category: this.categories[3],
        })
    ];

    setCurrentOp(op: Operation) {
        this.currentOp = this.currentOp === op ? undefined : op;
    }

    getCurrentOp(): Operation {
        return this.currentOp;
    }

    getListOutcome(): Operation[] {
        return this.ops.filter(op => op.source === 'outcome');
    }

    getListIncome(): Operation[] {
        return this.ops.filter(op => op.source === 'income');
    }

    getCategories(): string[] {
        return this.categories;
    }

    getTypes(): string[] {
        return this.types;
    }

    sumAmounts(ops: Operation[]): number {
        let result = 0;
        ops.forEach(op => result += op.amount);
        return result;
    }

    getIncomeRepartition(): number[] {
        let incomeOps = this.getListIncome();
        let result: number[] = [];
        for(let i = 0; i < this.categories.length; i++) {
            result.push(this.sumAmounts(incomeOps.filter(op => op.category === this.categories[i])));
        }
        return result;
    }

    getOutcomeRepartition(): Array<number> {
        let outcomeOps = this.getListOutcome();
        let result: number[] = [];
        for(let i = 0; i < this.categories.length; i++) {
            result.push(this.sumAmounts(outcomeOps.filter(op => op.category === this.categories[i])));
        }
        return result;
    }
}
