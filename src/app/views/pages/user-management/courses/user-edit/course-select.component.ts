// Angular
import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// RxJS
// NGRX
import { Store, select } from '@ngrx/store';
import { AppState } from '../../../../../core/reducers';
// Layout
import { SubheaderService, LayoutConfigService } from '../../../../../core/_base/layout';
import { LayoutUtilsService, MessageType } from '../../../../../core/_base/crud';

@Component({
	selector: 'kt-course-select',
	templateUrl: './course-select.component.html',
	styleUrls: ['../../courses.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class CourseSelectComponent implements OnInit {
	courses: any[];
	cols: any[];
	batches: any[];

	dsCols: any[];
	dataSources: any[];
	constructor() { }

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		this.cols = [
			{ field: 'loadPlanName', header: 'Load Plan Name', textAlign: 'left', width: '17%' },
			{ field: 'loadPlanInstance', header: 'Load Plan Instance', textAlign: 'left', width: '' },
			{ field: 'lpStartDate', header: 'LP Start Date', textAlign: 'center', width: '15%' },
			{ field: 'lpEndDate', header: 'LP end Date', textAlign: 'center', width: '15%' },
			{ field: 'lpStatus', header: 'LP Status', textAlign: 'center', width: '' },
			{ field: 'lpDuration', header: 'LP Duration', textAlign: 'center', width: '18%' }
		];

		this.dsCols = [
			{field: 'name', header: 'Datasource Name', textAlign: 'left'},
			{field: 'location', header: 'Datasource Location', textAlign: 'left'},
			{field: 'frequency', header: 'Frequency', textAlign: 'left'},
			{field: 'noOfRecords', header: 'Avg. Records', textAlign: 'left'}
		]

		this.dataSources = [{
			id: 1,
			name: 'HIPAA Data Vault',
			location: 'Huwaii',
			frequency: 'Every 4 hour', // Administrator
			noOfRecords: '2K'
		},{
			id: 2,
			name: 'Dept. Of Health',
			location: 'New York',
			frequency: 'Every 3 hour', // Administrator
			noOfRecords: '1K'
		},{
			id: 2,
			name: 'Safe Travels',
			location: 'Houston',
			frequency: 'Every 1 hour', // Administrator
			noOfRecords: '1.4K'
		}
	]

		this.batches = [{
			id: 1,
			loadPlanName: 'HIR Custom Load Plan',
			loadPlanInstance: 'Batch - 123',
			lpStartDate: '20-Jan-21 03:21:46', // Administrator
			lpEndDate: '20-Sep-21 03:41:26',
			lpStatus: 'Done',
			lpDuration: '0Hrs 20mins 30Sec'
		}]

		this.courses = [{
			id: 1,
			coursesCode: 'HealthCert-PCR',
			coursesName: 'Vax Check ETL Result page',
			pendingActions: 0, // Administrator
			totalIssued: 1,
			lastUpdated: '1w ago',
		},
		{
			id: 1,
			coursesCode: 'Covid-TEST',
			coursesName: 'Dummy Vaccination result',
			pendingActions: 1, // Administrator
			totalIssued: 0,
			lastUpdated: '2d ago',
		}]
	}

}