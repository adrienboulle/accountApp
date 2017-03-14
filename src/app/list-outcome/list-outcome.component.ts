import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Operation } from '../operation/operation';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import { OperationService } from '../operation/opService.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DonutChartComponent } from '../donut/donut.component';

@Component({
  selector: 'list-outcome',
  templateUrl: './list-outcome.component.html'
})
export class ListOutcomeComponent implements OnInit {

  private myDatePickerOptions: IMyOptions = {
        dateFormat: 'dd/mm/yyyy',
        todayBtnTxt: 'Today',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '19px',
        width: '130px',
        inline: false,
        disableUntil: {year: 2016, month: 8, day: 10},
        selectionTxtFontSize: '12px'
    };

  constructor(private opService: OperationService) { }

  ngOnInit() { }

  public get ops(): Operation[] {
    return this.opService.getListOutcome();
  }

  newDate: number = 0;
  public onDateChanged(event: IMyDateModel) {
        this.newDate = event.epoc*1000;
  }

  public addOp (newAmount: number, newLabel: string): void {
    if(newAmount && newLabel) {
      this.opService.addOp(newAmount, newLabel, this.newDate, 'outcome');
    }
  }

  public getChartData(): number[] {
    return this.opService.getOutcomeRepartition();
  }


}
