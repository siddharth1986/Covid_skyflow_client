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
import { CommonService } from './common.service';

@Component({
	selector: 'kt-course-select',
	templateUrl: './course-select.component.html',
	styleUrls: ['../../courses.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers: [CommonService]
})
export class CourseSelectComponent implements OnInit {
	courses: any[];
	cols: any[];
	batches: any[];

	dsCols: any[];
	dataSources: any[];
	constructor(private commonService: CommonService) { }

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		this.cols = [
			{ field: 'batch_id', header: 'Batch ID', textAlign: 'left', width: '17%' },
			{ field: 'no_of_records', header: 'No of records', textAlign: 'left', width: '' },
			{ field: 'source_name', header: 'Source Name', textAlign: 'center', width: '15%' },
			{ field: 'status', header: 'LP Status', textAlign: 'center', width: '' },
			{ field: 'upload_start_at', header: 'LP Start Date', textAlign: 'center', width: '15%' },
			{ field: 'upload_end_at', header: 'LP End Date', textAlign: 'center', width: '18%' }
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
			location: 'Phoenix',
			frequency: 'Every 4 hour', // Administrator
			noOfRecords: '2K'
		},{
			id: 2,
			name: 'State Dept. Of Health',
			location: 'Hawaii',
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
	this.getMetaData();
	this.batches = [{
		id: 1,
		batch_id: '3ZPnCrawgzghXZiYp',
		no_of_records: '1',
		source_name: 'Dept. of Health', // Administrator
		status: 'SUCCESS',
		upload_start_at: '2021-03-03T16:08:03.603Z',
		upload_end_at: '2021-03-03T16:08:06.707Z'
	}]
		// this.batches = [{
		// 	id: 1,
		// 	loadPlanName: 'HIR Custom Load Plan',
		// 	loadPlanInstance: 'Batch - 123',
		// 	lpStartDate: '20-Jan-21 03:21:46', // Administrator
		// 	lpEndDate: '20-Sep-21 03:41:26',
		// 	lpStatus: 'Done',
		// 	lpDuration: '0Hrs 20mins 30Sec'
		// }]


		this.courses = [{
			id: 1,
			coursesCode: 'Covid19-VAX-Check',
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
	handleChange(e){
		this.getMetaData()
	}
	handleClick(e){
		console.log('in handle click')
		this.getMetaData()
	}
	getMetaData() {
		console.log('in get meata data')
		this.commonService.getMetadata().subscribe(data => {
			this.batches = []
			console.log("data:", data.response)
			this.batches = [...data.response]
		})
	}
}
