import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MenuItem, SelectItem } from 'primeng/api';
@Component({
	selector: 'kt-wizard2',
	templateUrl: './wizard2.component.html',
	styleUrls: ['./wizard2.component.scss']
})
export class Wizard2Component implements OnInit, AfterViewInit {

	@ViewChild('wizard', {static: true}) el: ElementRef;

	model: any = {
		fname: 'John',
		lname: 'Wick',
		phone: '+61412345678',
		email: 'john.wick@reeves.com',
		address1: 'Address Line 1',
		address2: 'Address Line 2',
		postcode: '3000',
		city: 'Melbourne',
		state: 'VIC',
		country: 'AU',
		delivery: 'overnight',
		packaging: 'regular',
		preferreddelivery: 'morning',
		locaddress1: 'Address Line 1',
		locaddress2: 'Address Line 2',
		locpostcode: '3072',
		loccity: 'Preston',
		locstate: 'VIC',
		loccountry: 'AU',
		ccname: 'John Wick',
		ccnumber: '4444 3333 2222 1111',
		ccmonth: '01',
		ccyear: '21',
		cccvv: '123',
	};
	submitted = false;

	cvx_item: SelectItem[];
  selectedCVX: any;

  ndc_item: SelectItem[];
  selectedNDC: any;

  site_item: SelectItem[];
  selectedSite: any;
  
  states: any[] = []
  // selectedState: any;
  items: MenuItem[];

  extract_item: SelectItem[];
  selectedExtractType: any;

  ethnicity_item: SelectItem[];
  selectedEthnicity: any;

  country_item: SelectItem[];
  selectedCountry: any;

  state_item: SelectItem[];
  selectedState: any;

  city_item: SelectItem[];
  selectedCity: any;

  sex_item: SelectItem[];
  selectedSex: any;

  race_item: SelectItem[];
  selectedRace: any;

  series_item: SelectItem[];
  selectedSeries: any;

  location_item: SelectItem[];
  selectedLocation: any;

  provider_item: SelectItem[];
  selectedProvider: any;

  refusal_item: SelectItem[];
  selectedRefusal: any;

  comorbidity_item: SelectItem[];
  selectedComorbidity: any;

  missed_item: SelectItem[];
  selectedMissed: any;

  serology_item: SelectItem[];
  selectedSerology: any;

	constructor() {
	}

	ngOnInit() {
		this.extract_item = [{label: 'Deidentified', value: 'D'},
    {label: 'PPRL', value: 'P'},
    {label: 'Identified', value: 'I'}];

    this.ethnicity_item = [{label: 'Hispanic or Latino', value: '2135-2'},
    {label: 'Hispanic or Latino', value: '2186-5'},
    {label: 'Unknown ehnicity', value: 'UNK'},
    {label: 'Unable to report to do policy/law', value: 'POL'}];

    this.country_item = [{label: 'Country name 1', value: '1'},
    {label: 'Country name 2', value: '2'},
    {label: 'Country name 3', value: '3'}];

    this.state_item = [{label: 'State name 1', value: '1'},
    {label: 'State name 2', value: '2'},
    {label: 'State name 3', value: '3'}];

    this.city_item = [{label: 'City name 1', value: '1'},
    {label: 'City name 2', value: '2'},
    {label: 'City name 3', value: '3'}];

    this.sex_item = [{label: 'Male', value: 'M'},
    {label: 'Female', value: 'F'},
    {label: 'Unknown', value: 'U'}];

    this.series_item = [{label: 'Yes', value: 'YES'},
    {label: 'No', value: 'NO'},
    {label: 'Unknown', value: 'UNKNOWN'}];

    this.location_item = [{label: 'Clinic', value: 'CL'},
    {label: 'Health Dept.', value: 'HD'},
    {label: 'Pharmacy', value: 'PH'}];

    this.provider_item = [{label: 'Registered Nurse', value: 'CL'},
    {label: 'Medical Doctor', value: 'HD'},
    {label: 'Nurse Practitioner', value: 'PH'}];

    this.refusal_item = [{label: 'Yes', value: 'CL'},
    {label: 'No', value: 'PH'}];

    this.comorbidity_item = [{label: 'Yes', value: 'CL'},
    {label: 'No', value: 'PH'},
    {label: 'Unknown', value: 'UNKNOWN'}];

    this.missed_item = [{label: 'Yes', value: 'CL'},
    {label: 'No', value: 'PH'}];

    this.serology_item = [{label: 'Yes', value: 'CL'},
    {label: 'No', value: 'PH'},
    {label: 'Unknown', value: 'UNKNOWN'}];

    this.race_item = [{label: 'American Indian or Alaska Native', value: '1002-5'},
    {label: 'Asian', value: '2028-9'},
    {label: 'Native Haw aiian or Other Pacific Islander', value: '2076-8'},
    {label: 'Black or African American', value: '2028-5'},
    {label: 'White', value: '2028-1'},
    {label: 'Other race', value: '2028-2'},
    {label: 'Unknown', value: '2028-3'},
    {label: 'Unable to report due to policy/law', value: '2028-4'}];

    this.cvx_item = [{label: 'COVID 19 Vaccine A', value: '900'},
    {label: 'COVID 19 Vaccine B', value: '901'},
    {label: 'COVID 19 Vaccine C', value: '902'}];

    this.site_item = [{label: 'Intradermal', value: '900'},
    {label: 'Intramuscular', value: '901'},
    {label: 'Intravenous', value: '901'},
    {label: 'Oral', value: '901'},
    {label: 'Percutaneous', value: '901'},
    {label: 'Nasal', value: '902'}];
	}

	ngAfterViewInit(): void {
		// Initialize form wizard
		const wizard = new KTWizard(this.el.nativeElement, {
			startStep: 1
		});

		// Validation before going to next page
		wizard.on('beforeNext', (wizardObj) => {
			// https://angular.io/guide/forms
			// https://angular.io/guide/form-validation

			// validate the form and use below function to stop the wizard's step
			// wizardObj.stop();
		});

		// Change event
		wizard.on('change', () => {
			setTimeout(() => {
				KTUtil.scrollTop();
			}, 500);
		});
	}

	onSubmit() {
		this.submitted = true;
	}
}
