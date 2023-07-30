import { ChangeDetectorRef, ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, LOCALE_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SuitcaseService } from "../../../../core/services/suitcase.service";
import { Suitcase, SuitcaseOverviewOutput } from "../../../../core/models/suitcase";
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RemoveDialogComponent } from "./dialog/remove-dialog.component";
import { SimpleOutput } from "../../../../core/models/shared";
import { MatSnackBar } from '@angular/material/snack-bar';
import { EXTENDED_SNACKBAR_TIME, GENERAL_SNACKBAR_TIME } from "../../../../core/config/config";

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
    private _dialog: MatDialog,
    private readonly _changeDetector: ChangeDetectorRef,
    private _router: Router,
    private _snackBar: MatSnackBar,
    @Inject(LOCALE_ID) public localeId: string,
  ) { }

  public ngOnInit(): void {
    const input = {};
    this._suitcaseService.retrieveSuitcaseOverview(input)
      .pipe(
        map((output: SuitcaseOverviewOutput) => output.list),
      )
      .subscribe((suitcaseList: Suitcase[]) => {
        let otherIcon = 0;
        let mountainIcon = 0;
        let beachIcon = 0;
        let babyIcon = 0;
        let sportIcon = 0;
        let petIcon = 0;
        suitcaseList = suitcaseList.map((suitcase: Suitcase) => {
          // assign a default image if it has not one attached
          if (!suitcase.icon && suitcase.items.baby.length > 0 && babyIcon <= otherIcon) {
            suitcase.icon = 'baby';
            babyIcon++;
          } else if (!suitcase.icon && suitcase.items.sport.length > 0 && sportIcon <= otherIcon) {
            suitcase.icon = 'sport';
            sportIcon++;
          } else if (!suitcase.icon && suitcase.items.pet.length > 0 && petIcon <= otherIcon) {
            suitcase.icon = 'pet';
            petIcon++;
          } else if (!suitcase.icon && suitcase.items.mountain.length > 0 && mountainIcon <= otherIcon) {
            suitcase.icon = 'mountain';
            mountainIcon++;
          } else if (!suitcase.icon && suitcase.items.beach.length > 0 && beachIcon <= otherIcon) {
            suitcase.icon = 'beach';
            beachIcon++;
          } else {
            suitcase.icon = 'cultural';
            otherIcon++;
          }
          // create a new class suitcase to be able to use the inner methods
          return new Suitcase(suitcase)
        });
        this.suitcaseList = suitcaseList;
        this.suitcaseListTotal = suitcaseList.length;
        this.dataReady = true;
        this._changeDetector.detectChanges();
        this.dataLoaded.emit();
      })
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
          this._snackBar.open("Una maleta menos...", '', {duration: GENERAL_SNACKBAR_TIME});
        }, (error: any) => {
          this._snackBar.open("Vaya, ha habido un problema y no se ha podido eliminar la maleta, si el problema persiste por favor contactanos", '', {duration: EXTENDED_SNACKBAR_TIME});
        });
      }
      dialogRef.close();
    });
  }
}