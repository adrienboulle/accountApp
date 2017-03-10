import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Operation } from '../operation/operation';
import {IMyOptions, IMyDateModel, IMyDate} from 'mydatepicker';

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
      width: '70px',
      inline: false,
      disableUntil: {year: 2016, month: 8, day: 10},
      selectionTxtFontSize: '12px'
  };

  constructor() {
    this._ops = [
      new Operation({
        id: '1',
        amount: 100,
        label: 'anniv',
        date: Date.now(),
        type: 1,
        source: 'income',
        category: 1,
      }),
      new Operation({
        id: '2',
        amount: 2000,
        label: 'salaire',
        date: Date.now(),
        type: 1,
        source: 'income',
        category: 1,
      }),
    ];
  }

  ngOnInit() { }

  public get ops(): Operation[] {
    return this._ops;
  }

  newDate: number = 0;
  public onDateChanged(event: IMyDateModel) {
        this.newDate = event.epoc;
  }

  public addOp (newAmount: number, newLabel: string): void {
    if(newAmount && newLabel) {
      this._ops.push(
        new Operation({
          id: '1',
          amount: newAmount,
          label: newLabel,
          date: this.newDate,
          source: 'intcome'
        })
      );
    }
  }
}
