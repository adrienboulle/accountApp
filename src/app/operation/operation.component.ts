import { Component, OnInit, Input } from '@angular/core';
import {IMyOptions, IMyDateModel, IMyDate} from 'mydatepicker';
import { Operation } from './operation'
import { OperationService } from './opService.service'

@Component({
  selector: 'operation',
  templateUrl: './operation.component.html'
})
export class OperationComponent implements OnInit {

  @Input() op: Operation;
  public datePickerDate;

  newDate: number = 0;
  categories = [
    {id: 1, name: "Logement"},
    {id: 2, name: "Carburant"},
    {id: 3, name: "Alimentation"},
    {id: 4, name: "Loisirs"},
    {id: 5, name: "Autre"},
  ];
  types = [
    {id: 1, name: "Virement"},
    {id: 2, name: "Chèque"},
    {id: 3, name: "Espèces"},
    {id: 4, name: "Carte"},
    {id: 5, name: "Autre"},
  ];

  private myDatePickerOptions: IMyOptions = {
    dateFormat: 'dd/mm/yyyy',
    todayBtnTxt: 'Today',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    height: '19px',
    width: '150px',
    inline: false,
    disableUntil: {year: 2016, month: 1, day: 1},
    selectionTxtFontSize: '12px'
  };

  constructor(private opService: OperationService) { }

  public ngOnInit() {
    this.datePickerDate = {
      date : { 
        year: (new Date(this.op.date)).getFullYear(), 
        month: (new Date(this.op.date)).getMonth() + 1, 
        day: (new Date(this.op.date)).getDate() 
      }
    }
  }

  public toggleEdit() {
    this.opService.setCurrentOp(this.op);
  }

  public onDateChanged(event: IMyDateModel) {
    this.newDate = event.epoc;
  }

  public editOp(newAmount: number, newLabel: string, newType?: number, newCategory?: number){
    this.op.amount = newAmount;
    this.op.date = this.newDate;
    this.op.label = newLabel;
    this.op.type = newType;
    this.op.category = newCategory;
  }

}
