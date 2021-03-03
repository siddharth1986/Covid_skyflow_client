// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
// Core Module
import { CoreModule } from '../../../core/core.module';
import { PartialsModule } from '../../partials/partials.module';
import { DashboardComponent } from './dashboard.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { NgApexchartsModule } from 'ng-apexcharts';
import {BadgeModule} from 'primeng/badge';

@NgModule({
  imports: [
    CommonModule,
    PartialsModule,
    CoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      },
    ]),
    // ng-bootstrap modules
    NgbDropdownModule,
    NgbTabsetModule,
    NgbTooltipModule,
    InlineSVGModule,
    NgApexchartsModule,
    BadgeModule
  ],
  providers: [],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule {
}
