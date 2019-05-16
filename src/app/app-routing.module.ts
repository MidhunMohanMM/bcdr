import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { BusinessinfoComponent } from "./businessinfo/businessinfo.component";
import { PdfgeneratorComponent } from "./pdfgenerator/pdfgenerator.component"

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'businessinformation/:id', component: BusinessinfoComponent } ,
  { path: 'report/:id', component: PdfgeneratorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
