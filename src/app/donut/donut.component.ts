import { Component, Input, OnInit } from '@angular/core';
import { OperationService } from '../operation/opService.service';

@Component({
    selector: 'donut',
    templateUrl: './donut.component.html'
})
export class DonutChartComponent implements OnInit {

    @Input() isIncome: boolean;

    // Donut
    public donutChartLabels: string[];
    public donutChartData: number[];
    public donutChartType: string;

    constructor(public opService: OperationService) {
        this.donutChartLabels = opService.getCategories();
        this.donutChartType = 'doughnut';
    }

    ngOnInit(){
        if (this.isIncome) {
            this.donutChartData = this.opService.getIncomeRepartition();
        } else {
            this.donutChartData = this.opService.getOutcomeRepartition();
        }
    }
}
