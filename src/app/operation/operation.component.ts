import { Component, OnInit, Input } from '@angular/core';
import {IMyOptions, IMyDateModel, IMyDate} from 'mydatepicker';
import { Operation } from '../operation'
import { OperationService } from './opService.service'

@Component({
  selector: 'operation',
  templateUrl: './operation.component.html',
  styleUrls: ['../../assets/styles.css']
})
export class OperationComponent implements OnInit {

  @Input() op: Operation;

  newDate: Date = new Date(Date.now());
  categories = [
    {id: 1, name: "Logement"},
    {id: 2, name: "Carburant"},
    {id: 3, name: "Alimentation"},
    {id: 4, name: "Loisirs"},
  ];
  types = [
    {id: 1, name: "Virement"},
    {id: 2, name: "Chèque"},
    {id: 3, name: "Espèces"},
    {id: 4, name: "Carte"},
  ];


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

  constructor(private opService: OperationService) {
  }

  public ngOnInit() {}

  public toggleEdit() {
    this.opService.setCurrentOp(this.op);
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
