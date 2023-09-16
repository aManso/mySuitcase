import { ChangeDetectorRef, ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { map } from 'rxjs/operators';

import { SuitcaseService } from "../../../../core/services/suitcase.service";
import { Suitcase, SuitcaseOverviewOutput } from "../../../../core/models/suitcase";
import { RemoveDialogComponent } from "./dialog/remove-dialog.component";
import { SimpleOutput } from "../../../../core/models/shared";
import { EXTENDED_SNACKBAR_TIME, GENERAL_SNACKBAR_TIME } from "../../../../core/config/config";
import { FRONTEND_ERRORS } from 'src/app/core/const/frontend-errors';
import { FRONTEND_MESSAGES } from 'src/app/core/const/frontend-messages';

@Component({
  selector: 'my-suitcase-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewComponent implements OnInit {
  public suitcaseList: Suitcase[];
  public suitcaseListTotal: number;
  public dataReady = false;

  @Output()
  public dataLoaded: EventEmitter<void> = new EventEmitter<void>();

  public constructor(
    private readonly _suitcaseService: SuitcaseService,
    private readonly _dialog: MatDialog,
    private readonly _changeDetector: ChangeDetectorRef,
    private readonly _router: Router,
    private readonly _snackBar: MatSnackBar,
    @Inject(LOCALE_ID) public localeId: string,
  ) { }

  /**
   * It fetches all the created suitcases and notify parent component
   */
  public ngOnInit(): void {
    const input = {};
    this._suitcaseService.retrieveSuitcaseOverview(input)
      .pipe(
        map((output: SuitcaseOverviewOutput) => output.list),
      )
      .subscribe((suitcaseList: Suitcase[]) => {
        this.suitcaseList = this.selectBackgroundImg(suitcaseList);
        this.suitcaseListTotal = suitcaseList.length;
        this.dataReady = true;
        this._changeDetector.detectChanges();
        this.dataLoaded.emit();
      })
  }

  /**
   * Choose which image having as background of the created suitcases depending on the options selected for the trip
   * @param suitcaseList 
   * @returns the list of the suitcases with a chosen background
   */
  private selectBackgroundImg(suitcaseList: Suitcase[]):Suitcase[] {
    let otherIcon = 0;
    let mountainIcon = 0;
    let beachIcon = 0;
    let babyIcon = 0;
    let sportIcon = 0;
    let petIcon = 0;
    return suitcaseList.map((suitcase: Suitcase) => {
      // assign a default image if it has not one attached
      if (!suitcase.icon && suitcase.type.baby.selected && babyIcon <= otherIcon) {
        suitcase.icon = 'baby';
        babyIcon++;
      } else if (!suitcase.icon && suitcase.type.sport.selected && sportIcon <= otherIcon) {
        suitcase.icon = 'sport';
        sportIcon++;
      } else if (!suitcase.icon && suitcase.type.pet.selected && petIcon <= otherIcon) {
        suitcase.icon = 'pet';
        petIcon++;
      } else if (!suitcase.icon && suitcase.type.mountain.selected && mountainIcon <= otherIcon) {
        suitcase.icon = 'mountain';
        mountainIcon++;
      } else if (!suitcase.icon && suitcase.type.beach.selected && beachIcon <= otherIcon) {
        suitcase.icon = 'beach';
        beachIcon++;
      } else {
        suitcase.icon = 'cultural';
        otherIcon++;
      }
      // create a new class suitcase to be able to use the inner methods
      return new Suitcase(suitcase)
    });
  }

  public edit(suitcase: Suitcase) {
    this._suitcaseService.setCurrentSuitcase(suitcase);
    this._router.navigate(['edit-suitcase', suitcase.name], { state: { id: suitcase._id }});
  }

  public remove(id: string, index: number) {
    // confirm it the user is sure he/she wants to remove
    const dialogRef = this._dialog.open(RemoveDialogComponent, {
      height: '200px',
      width: '400px',
      hasBackdrop: true,
    });
    dialogRef.afterClosed().subscribe((confirm: string) => {
      if (confirm === 'true') {
        this._suitcaseService.removeSuitcase(id).subscribe((response: SimpleOutput) => {
          this.suitcaseList.splice(index, 1);
          this._changeDetector.detectChanges();
          this._snackBar.open(FRONTEND_MESSAGES.SUITCASE_REMOVED.message, '', {duration: GENERAL_SNACKBAR_TIME});
        }, (error: any) => {
          this._snackBar.open(FRONTEND_ERRORS.GENERAL_ERROR.message, '', {duration: EXTENDED_SNACKBAR_TIME});
        });
      }
      dialogRef.close();
    });
  }
}
