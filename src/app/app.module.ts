import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormWizardModule } from 'angular2-wizard';
import { LoginComponent } from './login/login.component';
import { BusinessinfoComponent } from './businessinfo/businessinfo.component';
import { ReportComponent } from './report/report.component';
import { PdfgeneratorComponent } from './pdfgenerator/pdfgenerator.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BusinessinfoComponent,
    ReportComponent,
    PdfgeneratorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,        
    ReactiveFormsModule ,
    FormWizardModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
    // HttpClient,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
