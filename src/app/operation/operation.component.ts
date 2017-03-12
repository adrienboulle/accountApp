import { Component, OnInit, Input } from '@angular/core';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import { Operation, Type, Category } from './operation'
import { OperationService } from './opService.service'

@Component({
  selector: 'operation',
  templateUrl: './operation.component.html'
})
export class OperationComponent implements OnInit {

  @Input() op: Operation;
  public datePickerDate: IMyDateModel;
  public categories: string[] = Object.keys(Category);
  public types: string[] = Object.keys(Type);

  private myDatePickerOptions: IMyOptions = {
    dateFormat: 'dd/mm/yyyy',
    todayBtnTxt: 'Today',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    height: '19px',
    width: '150px',
    inline: false,
    disableUntil: { year: 2016, month: 1, day: 1 },
    selectionTxtFontSize: '12px'
  };

  constructor(private opService: OperationService) {
    this.categories = this.categories.slice(this.categories.length / 2);
    this.types = this.types.slice(this.types.length / 2);
  }

  public ngOnInit() {
    this.datePickerDate = this.dateToModel(this.op.date)
  }

  private dateToModel(date: number): IMyDateModel {
    return { 
      date: {
        year: (new Date(date)).getFullYear(), 
        month: (new Date(date)).getMonth() + 1, 
        day: (new Date(date)).getDate()
      },
      jsdate: new Date(date),
      formatted: (new Date(date)).toDateString(),
      epoc: date
    }
  }
  

  public toggleEdit() {
    this.opService.setCurrentOp(this.op);
  }

  public onDateChanged(event: IMyDateModel) {
    this.datePickerDate = event;
  }

  public editOp(newAmount: number, newLabel: string, newType?: string, newCategory?: string) {
    this.op.amount = newAmount;
    this.op.label = newLabel;
    this.op.type = Type[newType];
    this.op.category = Category[newCategory];
    if(this.op.date != this.datePickerDate.epoc){
      this.op.date = this.datePickerDate.epoc*1000; 
    }
  }

}
