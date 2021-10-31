import { ChangeDetectorRef, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuitcaseService } from "../../../services/suitcase.service";
import { Suitcase, SuitcaseOverviewOutput } from "../../../../core/models/suitcase";
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RemoveDialogComponent } from "./dialog/remove-dialog.component";
import { SimpleOutput } from "../../../../core/models/shared";

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

  constructor(
    private readonly _suitcaseService: SuitcaseService,
    private _dialog: MatDialog,
    private readonly _changeDetector: ChangeDetectorRef,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    const input = {};
    this._suitcaseService.retrieveSuitcaseOverview(input)
      .pipe(
        map((output: SuitcaseOverviewOutput) => output.list),
      )
      .subscribe((suitcaseList: Suitcase[]) => {
        // remove the suitcase without items
        suitcaseList = suitcaseList.filter((suitcase: Suitcase)=> {
          return Object.values(suitcase.items).some((item: any[])=> {return item.length > 0})
        });
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
    })
  }

  public edit(suitcase: Suitcase) {
    this._suitcaseService.setCurrentSuitcase(suitcase);
    this._router.navigate(["public/edit-suitcase"]);
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
        }, (error: any) => {
          // TODO show general dialog error
        });
      }
      dialogRef.close();
    });
  }
}
