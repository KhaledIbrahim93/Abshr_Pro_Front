import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IndividualsHomePageComponent } from './individuals-home-page/individuals-home-page.component';

const routes: Routes = [
  {
    path: 'individualsHome',
    component: IndividualsHomePageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class IndividualsModule { }
