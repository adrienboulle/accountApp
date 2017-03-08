import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { ListOutcomeComponent } from './list-outcome/list-outcome.component';
import { ListIncomeComponent } from './list-income/list-income.component';
import { OperationComponent } from './operation/operation.component';
import { OperationService } from './operation/opService.service';

@NgModule({
  declarations: [
    AppComponent,
    ListOutcomeComponent,
    ListIncomeComponent,
    OperationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
