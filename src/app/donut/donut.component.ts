import { Component, Input, OnInit, OnChanges, DoCheck } from '@angular/core';
import { OperationService } from '../operation/opService.service';

@Component({
    selector: 'donut',
    templateUrl: './donut.component.html'
})
export class DonutChartComponent {

    @Input() isIncome: boolean;
    @Input() donutChartData: number[];
    
    public donutChartLabels: string[];
    public donutChartType: string;

    constructor(public opService: OperationService) {
        this.donutChartLabels = opService.getCategories();
        this.donutChartType = 'doughnut';
    }

    /*ngDoCheck() {
        if (this.isIncome) {
            this.donutChartData = this.opService.getIncomeRepartition();
        } else {
            this.donutChartData = this.opService.getOutcomeRepartition();
        }
    }*/

}
