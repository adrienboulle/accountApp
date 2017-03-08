import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListOutcomeComponent } from './list-outcome/list-outcome.component';
import { ListIncomeComponent } from './list-income/list-income.component';
import { OperationComponent } from './operation/operation.component';
import { OperationService } from './operation/opService.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'outcome', component: ListOutcomeComponent },
  { path: 'income', component: ListIncomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListOutcomeComponent,
    ListIncomeComponent,
    OperationComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
