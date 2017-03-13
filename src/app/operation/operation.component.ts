import { Component, OnInit, Input } from '@angular/core';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import { Operation } from './operation'
import { OperationService } from './opService.service'

@Component({
  selector: 'operation',
  templateUrl: './operation.component.html'
})
export class OperationComponent implements OnInit {

  @Input() op: Operation;
  public datePickerDate: IMyDateModel;
  public categories: string[];
  public types: string[];

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
    this.categories = opService.getCategories();
    this.types = opService.getTypes();
  }

  public ngOnInit() {
    this.datePickerDate = this.dateToModel(this.op.date);
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
    this.op.amount = Number(newAmount);
    this.op.label = newLabel;
    this.op.type = newType;
    this.op.category = newCategory;
    if (this.op.date != this.datePickerDate.epoc) {
      this.op.date = this.datePickerDate.epoc * 1000;
    }
  }

  public deleteOp(): void {
    this.opService.deleteOp(this.op);
  }
}
