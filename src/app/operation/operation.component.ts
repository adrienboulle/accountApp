import { Component, OnInit, Input } from '@angular/core';
import {IMyOptions, IMyDateModel, IMyDate} from 'mydatepicker';
import { Operation } from '../operation'

@Component({
  selector: 'operation',
  templateUrl: './operation.component.html',
  styleUrls: ['../../assets/styles.css']
})
export class OperationComponent implements OnInit {

  @Input() op: Operation;

  private _isExpanded: boolean;
  newDate: Date = new Date();

  private myDatePickerOptions: IMyOptions = {
        dateFormat: 'dd/mm/yyyy',
        todayBtnTxt: 'Today',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '19px',
        width: '150px',
        inline: false,
        disableUntil: {year: 2016, month: 8, day: 10},
        selectionTxtFontSize: '12px'
    };

  constructor() {
    //this.newDate = this.op.date;
  }

  public ngOnInit() {
  }

  public toggleEdit() {
    this._isExpanded = !this._isExpanded;

  }

  public get isExpanded(): boolean {
    return this._isExpanded;
  }

  public onDateChanged(event: IMyDateModel) {
        this.newDate = event.jsdate;
  }

  public editOp(newAmount: number, newLabel: string, newType?: string, newCategory?: string){
    this.op.amount = newAmount;
    this.op.date = this.newDate;
    this.op.label = newLabel;
    this.op.type = newType;
    this.op.category = newCategory;
  }


}
