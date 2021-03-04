// Angular
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Material
// NGRX

@Component({
	selector: 'kt-courses-list',
	templateUrl: './courses-list.component.html',
	styleUrls: ['../../courses.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListComponent implements OnInit {

	cols: any[];
	selectedCourse: any;
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
		private router: Router) { }

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	courses: any[];
	ngOnInit() {
		this.cols = [
			{ field: 'coursesCode', header: 'Course Code', textAlign: 'left', width: '17%' },
			{ field: 'coursesName', header: 'Course Name', textAlign: 'left', width: '*' },
			{ field: 'pendingActions', header: 'Pending Actions', textAlign: 'center', width: '15%' },
			{ field: 'totalIssued', header: 'Total Issued', textAlign: 'center', width: '15%' },
			{ field: 'lastUpdated', header: 'Last Updated', textAlign: 'center', width: '15%' }
		];

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


	editUser(event) {
		this.router.navigate([`../courses/${this.selectedCourse.id}/batches`], { relativeTo: this.activatedRoute });
	}
}
