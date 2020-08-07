import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {CreateSuitcaseFormSteps} from './create-suitcase-form.interfaces';

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

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
    this.currentQuestion = this.steps[0].stepNr;
    this.percentagePerQuestion = 100 / this.steps.length;
    this._updateProgressBar();
    this._createForm();
  }

  private _updateProgressBar() {
    this.progressBarValue = this.percentagePerQuestion * this.currentQuestion;
  }

  private _createForm() {
    this.createSuitcaseForm = this._formBuilder.group({
      name: [null, [Validators.required, Validators.maxLength(suitcaseNameMaxLength)],],
      from: [null, [Validators.required]],
      to: [null, [Validators.required]],
      place: [null, [Validators.required, Validators.maxLength(suitcaseNameMaxLength)],],
      type: this.getTypes()
    });
  }

  getTypes(): FormGroup {
    return this._formBuilder.group({
      beach: new FormControl(false),
      mountain: new FormControl(false),
      cultural: new FormControl(false),
      sport: new FormControl(false),
    });
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
    this._updateProgressBar();
  }

  public goToCreateSuitcase() {
    document.getElementById(this.steps[this.currentQuestion - 1].id).classList.add('disappearToTop');
    setTimeout(() => {
      this._router.navigate(['/public/create-suitcase']);
    }, 1000);
  }

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

}
