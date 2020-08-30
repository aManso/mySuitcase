import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CreateSuitcaseFormSteps} from './create-suitcase-form.interfaces';
import {TripLocation} from '../../../../core/models/trip';
import {Suitcase} from '../../../../core/models/suitcase';
import {SuitcaseService} from "../../../services/suitcase.service";

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
  public map: google.maps.Map;
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  lat = 41.646961;
  lng = -4.745940;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

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
    this.createSuitcaseForm = this._formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(suitcaseNameMaxLength)],],
      from: [null, [Validators.required]],
      to: [null, [Validators.required]],
      place: [null, [Validators.required, Validators.maxLength(suitcaseNameMaxLength)],],
      type: this.getTypes()
    });
  }

  private _updateProgressBar() {
    this.progressBarValue = this.percentagePerQuestion * this.currentQuestion;
  }

  public getTypes(): FormGroup {
    return this._formBuilder.group({
      beach: new FormControl(false),
      mountain: new FormControl(false),
      cultural: new FormControl(false),
      sport: new FormControl(false),
    });
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

  private _saveSuitcase(): void {
    const suitcase: Suitcase = {
      name: this.createSuitcaseForm.value.name,
      date: {
        from: this.createSuitcaseForm.value.from,
        to: this.createSuitcaseForm.value.to,
      },
      place: this.createSuitcaseForm.value.place,
      type: this.createSuitcaseForm.value.type,
      isInProgress: true,
    };
    this._suitcaseService.saveSuitcase(suitcase);
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

  public goToCreateSuitcase() {
    this._saveSuitcase();
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
