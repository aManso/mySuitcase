import { Component, OnInit } from '@angular/core';
import {Suitcase} from "../../../core/models/suitcase";
import {SuitcaseService} from "../../services/suitcase.service";

@Component({
  selector: 'app-home',
  templateUrl: './edit-suitcase.component.html',
})
export class EditSuitcaseComponent implements OnInit {
  public suitcase: Suitcase;

  constructor(
    private _suitcaseService: SuitcaseService,
  ) { }

  public ngOnInit() {
    this.suitcase = this._suitcaseService.getCurrentSuitcase();
  }
}
