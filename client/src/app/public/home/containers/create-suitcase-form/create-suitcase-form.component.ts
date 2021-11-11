import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateSuitcaseFormSteps } from './create-suitcase-form.interfaces';
import { TripLocation, TripType } from '../../../../core/models/trip';
import { Suitcase } from '../../../../core/models/suitcase';
import { SuitcaseService } from '../../../services/suitcase.service';

const suitcaseNameMaxLength = 20;

@Component({
  selector: 'my-suitcase-create-suitcase-form',
  templateUrl: './create-suitcase-form.component.html',
  styleUrls: ['./create-suitcase-form.component.scss']
})
export class CreateSuitcaseFormComponent implements OnInit {
  public progressBarValue: number;
  public currentQuestion: number;
  public percentagePerQuestion: number;
  public color: ThemePalette = 'primary';
  public mode: ProgressBarMode = 'determinate';
  public createSuitcaseForm: FormGroup;
  public sportForm: FormGroup;
  public currentDate = new Date();
  public steps: CreateSuitcaseFormSteps[] = [
    {
      id: 'name-form-field',
      stepNr: 1,
      headerText: 'Nombre de la maleta'
    },
    {
      id: 'date-form-field',
      stepNr: 2,
      headerText: 'Fechas del viaje'
    },
    {
      id: 'place-form-field',
      stepNr: 3,
      headerText: 'Lugar del viaje'
    },
    {
      id: 'type-form-field',
      stepNr: 4,
      headerText: '-'
    },
  ];
  // public myLatLng;
  // @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  lat = 41.646961;
  lng = -4.745940;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  // public map = new google.maps.Map(
  //   document.getElementById("lol") as HTMLElement,
  //   {
  //     zoom: 4,
  //     center: this.coordinates,
  //   }
  // );
  // marker = new google.maps.Marker({
  //   position: this.coordinates,
  //   map: this.map,
  // });

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly _suitcaseService: SuitcaseService,
  ) { }

  ngOnInit(): void {
    this.currentQuestion = this.steps[0].stepNr;
    this.percentagePerQuestion = 100 / this.steps.length;
    this._updateProgressBar();
    this._createForm();
  }

  // **** GENERIC METHODS *****

  private _createForm() {
    this.sportForm = new FormGroup({
      'cycling': new FormControl(false),
      'diving': new FormControl(false),
    });

    this.createSuitcaseForm = this._formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(suitcaseNameMaxLength)],],
      from: [null, [Validators.required]],
      to: [null, [Validators.required]],
      place: [null, [Validators.required, Validators.maxLength(suitcaseNameMaxLength)],],
      type: this._buildOptionList(),
      sports: this.sportForm,
    });
  }

  public getTypeControls(typeControl: any): FormControl[] {
    return typeControl.controls as FormControl[];
  }

  public isSportsSelected(): boolean {
    return (this.createSuitcaseForm.controls.type as FormArray).controls[2].value.selected;
  }

  private _updateProgressBar() {
    this.progressBarValue = this.percentagePerQuestion * this.currentQuestion;
  }

  private _buildOptionList() {
    const list = [
      {
        name: 'beach',
        selected: false,
      },
      {
        name: 'mountain',
        selected: false,
      },
      {
        name: 'sport',
        selected: false,
      },
      {
        name: 'pet',
        selected: false,
      },
      {
        name: 'baby',
        selected: false,
      },
    ];
    const arr = list.map(option => {
      return this._formBuilder.group(option);
    });
    return this._formBuilder.array(arr);
  }

  private _updateHeader(questionNr: number) {
    document.getElementById('create-form-header__text').innerHTML = questionNr > 0 ? this.steps[questionNr - 1].headerText : 'Empecemos';
  }

  public isDisabled(): boolean {
    switch (this.currentQuestion) {
      case 1:
        return this.createSuitcaseForm.controls.name.invalid;
      case 2:
        return this.createSuitcaseForm.controls.from.invalid || this.createSuitcaseForm.controls.to.invalid;
      case 3:
        return this.createSuitcaseForm.controls.place.invalid;
      case 4: return false;
    }
  }

  public saveSuitcase(): void {
    if (this.createSuitcaseForm.valid) {
      const suitcase = new Suitcase({
        name: this.createSuitcaseForm.value.name,
        date: {
          from: this.createSuitcaseForm.value.from,
          to: this.createSuitcaseForm.value.to,
        },
        place: this.createSuitcaseForm.value.place,
        type: this._transformListToObject(this.createSuitcaseForm.value.type, this._getSelectedSports(this.createSuitcaseForm.value.sports)),
        items: [],
        isInProgress: true,
    });
      this._suitcaseService.saveSuitcase(suitcase).subscribe(() => {
        this._goToCreateSuitcase();
      });
    }
  }

  private _getSelectedSports(sports): string[] {
    return Object.keys(sports).filter((key: string) => {
      return sports[key];
    });
  }

  private _transformListToObject(optionList: any[], sports?: string[]): TripType {
    const tripType = {
      common : {
        selected: true,
        currentPriority: 1,
        currentPage: 1,
      }
    };
    optionList.forEach((option) => {
      tripType[option.name] = {
        selected: option.selected,
        currentPriority: 1,
        currentPage: 1,
        sports: option.name === 'sport' ? sports : undefined,
      }
    });
    return tripType;
  }




  // ******* NAVIGATE BACK AND FORWARD **********

  public goPreviousQuestion() {
    // remove the classes in case we went back and forward
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.remove('appearFromBottom');
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.remove('appearFromTop');
    document.getElementById(this.steps[this.currentQuestion - 2].id).classList.remove('disappearToTop');
    // add the classes to disappear the current question and introduce the previous one
    document.getElementById(this.steps[this.currentQuestion - 2].id).classList.add('appearFromTop');
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.add('disappearToBottom');
    // update the rest of the variables to be in the second question
    this._updateHeader(this.currentQuestion);
    this.currentQuestion = this.currentQuestion - 1;
    this._updateProgressBar();
  }

  public nextQuestion() {
    // remove the classes in case we went back and forward
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.remove('appearFromTop');
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.remove('disappearToBottom');
    document.getElementById(this.steps[this.currentQuestion].id).classList.remove('disappearToBottom');
    // add the classes to disappear the current question and introduce the next one
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.add('disappearToTop');
    document.getElementById(this.steps[this.currentQuestion].id).classList.add('appearFromBottom');
    // update the rest of the variables to be in the second question
    this._updateHeader(this.currentQuestion);
    this.currentQuestion = this.currentQuestion + 1;
    if (this.currentQuestion === 3) {
      this._mapInitializer();
    }
    this._updateProgressBar();
  }

  private _goToCreateSuitcase() {
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.add('disappearToTop');
    setTimeout(() => {
      this._router.navigate(['/public/create-suitcase']);
    }, 1000);
  }




  // ******* MAP **********

  private _mapInitializer(): void {
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: this.coordinates,
        zoom: 6
      }
    );
    // In case we want to set up an initial marker in the map
    // this.marker.setMap(map);

    const input = document.getElementById('pac-input') as HTMLInputElement;

    // In case we want to insert the input inside the map
    // const card = document.getElementById('pac-card') as HTMLElement;
    // map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);

    const autocomplete = new google.maps.places.Autocomplete(input, {types: ['(cities)']});

    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo('bounds', map);

    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(['address_components', 'geometry', 'icon', 'name']);

    const infowindow = new google.maps.InfoWindow();
    const infowindowContent = document.getElementById('infowindow-content') as HTMLElement;
    infowindow.setContent(infowindowContent);
    const marker = new google.maps.Marker({
      map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', () => {
      infowindow.close();
      marker.setVisible(false);
      const place = autocomplete.getPlace();

      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert('No details available for input: ' + place.name);
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17); // Why 17? Because it looks good.
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      let address = '';

      if (place.address_components) {
        address = [
          (place.address_components[0] &&
            place.address_components[0].short_name) ||
          '',
          (place.address_components[1] &&
            place.address_components[1].short_name) ||
          '',
          (place.address_components[2] &&
            place.address_components[2].short_name) ||
          ''
        ].join(' ');
      }

      infowindowContent.children['place-icon'].src = place.icon;
      infowindowContent.children['place-name'].textContent = place.name;
      infowindowContent.children['place-address'].textContent = address;
      infowindow.open(map, marker);

      this._setPlaceValue(place);
    });
  }

  private _setPlaceValue(place: any): void {
    const tripLocation: TripLocation = {
      country: this._getLocationValue(place.address_components, 'country'),
      city: this._getLocationValue(place.address_components, 'locality'),
      street: this._getLocationValue(place.address_components, 'route'),
      coordinates: {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      },
    };
    this.createSuitcaseForm.controls.place.setValue(tripLocation);
  }

  private _getLocationValue(listOfValues: any[], type: string): string {
    const name = listOfValues.find((item: any) => {
      return item.types.some((typeInList: string) => typeInList === type)
    });
    return name ? name.long_name : name;
  }
}
