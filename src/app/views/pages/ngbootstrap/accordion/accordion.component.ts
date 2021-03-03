import { OnInit, Component, ChangeDetectionStrategy } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem, SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'kt-accordion',
  templateUrl: './accordion.component.html',
  styles: [`
		.card-header--title {
			display:block;
		}
	`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers
})
export class AccordionComponent implements OnInit {
  exampleAccordion: any;
  exampleOneOpenPanelAtAHome: any;
  exampleTogglePanels: any;
  examplePreventPanelToggle: any;
  exampleGlobalConfigurationOfAccordions: any;
  
  constructor(config: NgbAccordionConfig,  private router: Router) {
    // customize default values of accordions used by this component tree
    // config.closeOthers = true;
    //  config.type = 'info';
  }
  
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
    {label: 'Unknown / undifferentiated', value: 'U'}];

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

    this.items = [{
      label: 'Recipient Detail',
      routerLink: 'personal'
    },
    {
      label: 'Vaccine Detail',
      routerLink: 'seat'
    },
    {
      label: 'Administration Detail',
      routerLink: 'payment'
    }]
  }

  nextPage() {
    // this.ticketService.ticketInformation.seatInformation = this.seatInformation;
    this.router.navigate(['ngbootstrap/accordion/payment']);
}

prevPage() {
    this.router.navigate(['ngbootstrap/accordion/personal']);
}

  // api methods
  // ng-methods
  beforeChange($event: NgbPanelChangeEvent) {

    if ($event.panelId === 'preventchange-2') {
      $event.preventDefault();
    }

    if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
      $event.preventDefault();
    }
  }
}
