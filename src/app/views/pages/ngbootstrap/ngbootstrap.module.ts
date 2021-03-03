import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgbootstrapComponent } from './ngbootstrap.component';
import { AlertComponent } from './alert/alert.component';
import { AccordionComponent } from './accordion/accordion.component';
import { NgbAlertConfig, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartialsModule } from '../../partials/partials.module';
import { CoreModule } from '../../../core/core.module';
import { CodePreviewModule } from '../../partials/content/general/code-preview/code-preview.module';

import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { CollapseComponent } from './collapse/collapse.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent, NgbdModalContentComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RatingComponent } from './rating/rating.component';
import { TabsComponent } from './tabs/tabs.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypeheadComponent } from './typehead/typehead.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {StepsModule} from 'primeng/steps';

import { SeatDemo } from './accordion/seatdemo';
// import { ConfirmationDemo } from './accordion/confirmationdemo';
import { PersonalDemo } from './accordion/personaldemo';
// import { PaymentDemo } from './accordion/paymentdemo';

import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MultiSelectModule} from 'primeng/multiselect';
import {ChipsModule} from 'primeng/chips';
const routes: Routes = [
	{
		path: '',
		component: NgbootstrapComponent,
		children: [
			{
				path: 'accordion',
				component: AccordionComponent
			},
			{
				path: 'alert',
				component: AlertComponent
			},
			{
				path: 'buttons',
				component: ButtonsComponent
			},
			{
				path: 'carousel',
				component: CarouselComponent
			},
			{
				path: 'collapse',
				component: CollapseComponent
			},
			{
				path: 'datepicker',
				component: DatepickerComponent
			},
			{
				path: 'dropdown',
				component: DropdownComponent
			},
			{
				path: 'modal',
				component: ModalComponent
			},
			{
				path: 'pagination',
				component: PaginationComponent
			},
			{
				path: 'popover',
				component: PopoverComponent
			},
			{
				path: 'progressbar',
				component: ProgressbarComponent
			},
			{
				path: 'rating',
				component: RatingComponent
			},
			{
				path: 'tabs',
				component: TabsComponent
			},
			{
				path: 'timepicker',
				component: TimepickerComponent
			},
			{
				path: 'tooltip',
				component: TooltipComponent
			},
			{
				path: 'typehead',
				component: TypeheadComponent
			}
		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		PartialsModule,
		NgbModule,
		CoreModule,
		CodePreviewModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		PerfectScrollbarModule,
		InputTextModule,
		DropdownModule,
		CardModule,
		InputTextareaModule,
		StepsModule,
		ButtonModule,
		InputMaskModule,
		CalendarModule,
		SelectButtonModule,
		MultiSelectModule,
		ChipsModule
	],
	exports: [RouterModule],
	declarations: [
		NgbootstrapComponent,
		AlertComponent,
		AccordionComponent,
		ButtonsComponent,
		CarouselComponent,
		CollapseComponent,
		DatepickerComponent,
		DropdownComponent,
		ModalComponent,
		NgbdModalContentComponent,
		PaginationComponent,
		PopoverComponent,
		ProgressbarComponent,
		RatingComponent,
		TabsComponent,
		TimepickerComponent,
		TooltipComponent,
		TypeheadComponent,
		SeatDemo,
		PersonalDemo,
		// ConfirmationDemo,
		// PaymentDemo
	],
	providers: [
		NgbAlertConfig, ],
	entryComponents: [
		NgbdModalContentComponent
	]
})
export class NgbootstrapModule {
}
