import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Operation } from '../operation/operation';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import { OperationService } from '../operation/opService.service';

@Component({
  selector: 'list-income',
  templateUrl: './list-income.component.html'
})
export class ListIncomeComponent implements OnInit {

  private _ops: Operation[];

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

  constructor(opService: OperationService) {
    this._ops = opService.getListIncome();
  }

  ngOnInit() { }

  public get ops(): Operation[] {
    return this._ops;
  }

  newDate: number = 0;
  public onDateChanged(event: IMyDateModel) {
        this.newDate = event.epoc*1000;
  }

  public addOp (newAmount: number, newLabel: string): void {
    if(newAmount && newLabel) {
      this._ops.push(
        new Operation({
          id: '1',
          amount: newAmount,
          label: newLabel,
          date: this.newDate,
          source: 'income'
        })
      );
    }
  }
}
