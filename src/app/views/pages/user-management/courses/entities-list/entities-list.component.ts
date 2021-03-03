// Angular
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Material
// NGRX

@Component({
	selector: 'kt-entities-list',
	templateUrl: './entities-list.component.html',
	// styleUrls: ['../../entities.component.scss'],
	// encapsulation: ViewEncapsulation.None,
	styles: [
		`
		:host ::ng-deep .p-dropdown {
			width: 14rem;
		}
		`
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntitiesListComponent implements OnInit {

	cols: any[];
	selectedCourse: any;

	selectedDataSource: any;
	
	courses2: {
		id: string; fieldName: string; key: string; dataType: string; // Administrator
		length: number; fieldDescription: string;
	}[];
	courses3: {
		id: string; fieldName: string; key: string; dataType: string; // Administrator
		length: number; fieldDescription: string;
	}[];
	dataSources: { name: string; code: string; }[];
	/**
	 *
	 * @param activatedRoute: ActivatedRoute
	 * @param store: Store<AppState>
	 * @param router: Router
	 * @param layoutUtilsService: LayoutUtilsService
	 * @param subheaderService: SubheaderService
	 */
	constructor(
		private activatedRoute: ActivatedRoute,
		private router: Router) {
			this.dataSources = [
				{name: 'HIR Schema', code: 'HIR Schema'},
				{name: 'Safe Travels Schema', code: 'Safe Travels Schema'},
				{name: 'FV-HHIE Mapping', code: 'FV-HHIE Mapping'},
				{name: 'All', code: 'All'},
			];
			this.selectedDataSource = this.dataSources[0].code
		 }

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	courses1: any[];
	colsAll: any[];
	courses4: any[];
	ngOnInit() {
		this.cols = [
			{ field: 'fieldName', header: 'Field Name'},
			{ field: 'key', header: 'Key'},
			{ field: 'dataType', header: 'Data Type'},
			{ field: 'length', header: 'Length'},
			{ field: 'fieldDescription', header: 'Field Description'}
		];

		this.colsAll = [
			{ field: 'id', header: 'Data Source'},
			{ field: 'fieldName', header: 'Field Name'},
			{ field: 'key', header: 'Key'},
			{ field: 'dataType', header: 'Data Type'},
			{ field: 'length', header: 'Length'},
			{ field: 'fieldDescription', header: 'Field Description'}
		];

		this.courses1 = [
			{
			id: 'HIR Schema',
			fieldName: 'name',
			key: 'N',
			dataType: 'String', // Administrator
			length: 255,
			fieldDescription: `Patient's Name`
		},
		{
			id: 'HIR Schema',
			fieldName: 'unique_identifier',
			key: 'N',
			dataType: 'String',
			length: 255,
			fieldDescription: 'Unique identification of the records'
		},{
			id: 'HIR Schema',
			fieldName: 'age',
			key: 'N',
			dataType: 'String',
			length: 25,
			fieldDescription: `Patient's age`
		},{
			id: 'HIR Schema',
			fieldName: 'patient_consent_timestamp',
			key: 'N',
			dataType: 'String', // Administrator
			length: 255,
			fieldDescription: 'Timestamp when consent has been filled up by patient'
		},{
			id: 'HIR Schema',
			fieldName: 'patient_consent_given',
			key: 'N',
			dataType: 'String', // Administrator
			length: 25,
			fieldDescription: 'If consent is given by the patient or not'
		},{
			id: 'HIR Schema',
			fieldName: 'date_of_birth',
			key: 'N',
			dataType: 'String', // Administrator
			length: 55,
			fieldDescription: 'Birth date of the patient'
		},{
			id: 'HIR Schema',
			fieldName: 'empoyed_in_healthcare_occupation',
			key: 'N',
			dataType: 'String', // Administrator
			length: 255,
			fieldDescription: 'If patient is already in healthcare industries'
		}]

		this.courses2 = [
			{
			id: 'Safe Travels Schema',
			fieldName: 'employed_in_healthcare_value',
			key: 'N',
			dataType: 'String', // Administrator
			length: 255,
			fieldDescription: `If patient had a job in healthcare in the past`
		},
		{
			id: 'Safe Travels Schema',
			fieldName: 'ethnicity',
			key: 'N',
			dataType: 'String',
			length: 255,
			fieldDescription: 'Non or Hispanic or Latino'
		},{
			id: 'Safe Travels Schema',
			fieldName: 'phone_number',
			key: 'N',
			dataType: 'String',
			length: 25,
			fieldDescription: `Contact information`
		},{
			id: 'Safe Travels Schema',
			fieldName: 'race',
			key: 'N',
			dataType: 'String', // Administrator
			length: 255,
			fieldDescription: 'american or indian or alaskan'
		},{
			id: 'Safe Travels Schema',
			fieldName: 'residence_in_congregate_care_value',
			key: 'N',
			dataType: 'String', // Administrator
			length: 25,
			fieldDescription: 'Residence in congregate care area or not'
		},{
			id: 'Safe Travels Schema',
			fieldName: 'sex',
			key: 'N',
			dataType: 'String', // Administrator
			length: 55,
			fieldDescription: 'Gender information'
		},{
			id: 'Safe Travels Schema',
			fieldName: 'test_consent_given',
			key: 'N',
			dataType: 'String', // Administrator
			length: 255,
			fieldDescription: 'If test consent is give or not'
		}]

		this.courses3 = [
			{
			id: 'FV-HHIE Mapping',
			fieldName: 'previous_test_result_conclusion',
			key: 'N',
			dataType: 'String', // Administrator
			length: 255,
			fieldDescription: `Any past records for the tests`
		},
		{
			id: 'FV-HHIE Mapping',
			fieldName: 'previous_result',
			key: 'N',
			dataType: 'String',
			length: 255,
			fieldDescription: 'Do we have any past result'
		},{
			id: 'FV-HHIE Mapping',
			fieldName: 'previous_test_and_result_type',
			key: 'N',
			dataType: 'String',
			length: 25,
			fieldDescription: `previous test and result type`
		},{
			id: 'FV-HHIE Mapping',
			fieldName: 'previous_test_date',
			key: 'N',
			dataType: 'String', // Administrator
			length: 255,
			fieldDescription: 'Date of the previous test conducted'
		},{
			id: 'FV-HHIE Mapping',
			fieldName: 'country',
			key: 'N',
			dataType: 'String', // Administrator
			length: 25,
			fieldDescription: 'Which country patient belongs to'
		},{
			id: 'FV-HHIE Mapping',
			fieldName: 'county',
			key: 'N',
			dataType: 'String', // Administrator
			length: 55,
			fieldDescription: 'county where patient lives'
		},{
			id: 'FV-HHIE Mapping',
			fieldName: 'state',
			key: 'N',
			dataType: 'String', // Administrator
			length: 255,
			fieldDescription: 'state of the patient'
		}]
		this.courses4 = [...this.courses1, ...this.courses2, ...this.courses3]
	}
}
