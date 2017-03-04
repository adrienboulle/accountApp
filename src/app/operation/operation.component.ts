import { Component, OnInit, Input } from '@angular/core';
import { Operation } from '../operation'

@Component({
  selector: 'operation',
  templateUrl: './operation.component.html',
  styleUrls: ['../../assets/styles.css']
})
export class OperationComponent implements OnInit {

  @Input() op: Operation;

  private _isExpanded: boolean;

  constructor() { }

  public ngOnInit() {
  }

  public toggleEdit() {
    this._isExpanded = !this._isExpanded;
  }

  public get isExpanded(): boolean {
    return this._isExpanded;
  }

}
