import { Component, OnInit } from '@angular/core';
import { Operation } from '../operation'
import { DatePickerOptions, DateModel } from 'ng2-datepicker';

@Component({
  selector: 'list-outcome',
  templateUrl: './list-outcome.component.html',
  styleUrls: ['../../assets/styles.css']
})
export class ListOutcomeComponent implements OnInit {
  date: DateModel;
  options: DatePickerOptions;
  private _ops: Operation[];

  constructor() { 
    this.options = new DatePickerOptions();
    
    this._ops = [
      new Operation({
        id: '1',
        amount: 10,
        label: 'blop',
        date: Date.now(),
        type: 'outcome',
        category: 'sortie',
      }),
      new Operation({
        id: '2',
        amount: 15,
        label: 'blop2',
        date: Date.now(),
        type: 'outcome',
        category: 'alimentation',
      }),
    ];
  }

  ngOnInit() {
  }

  public get ops(): Operation[] {
    return this._ops;
  }
}
