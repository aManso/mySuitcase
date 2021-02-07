import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Renderer2,
  ElementRef,
  ViewChildren,
  QueryList,
  ViewEncapsulation,
} from '@angular/core';
import { SuitcaseService } from '../services/suitcase.service';
import { Suitcase } from '../../core/models/suitcase';
import {TripItem, TripType} from '../../core/models/trip';
import { Observable } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { SaveDialogComponent } from "./components/dialog/save-dialog.component";

@Component({
  selector: 'app-create-suitcase',
  templateUrl: './create-suitcase.component.html',
  styleUrls: ['./create-suitcase.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('showHiddenItem', [
      state('hidden', style({
        opacity: 0,
      })),
      state('show', style({
        opacity: 1,
      })),
      transition('hidden => show', [
        animate('1s')
      ]),
      transition('show => hidden', [
        animate('1s')
      ]),
    ]),
  ],
})
export class CreateSuitcaseComponent implements OnInit {
  public suitcase: Suitcase;
  public showWeather: boolean;
  public weatherDays: number;
  private _sevenDaysDateInMillis: number;
  public suggestionList: TripType;
  public newItem: string;
  public counter = 1;
  public selectedCategory?: string;
  public totalItemsInList = 0;
  public dataReady = false;
  @ViewChildren('common') viewChildrenCommon!: QueryList<any>;
  @ViewChildren('sport') viewChildrenSport!: QueryList<any>;
  @ViewChildren('beach') viewChildrenBeach!: QueryList<any>;
  @ViewChildren('mountain') viewChildrenMountain!: QueryList<any>;
  @ViewChildren('pet') viewChildrenPet!: QueryList<any>;
  @ViewChildren('baby') viewChildrenBaby!: QueryList<any>;
  @ViewChildren('suitcase') viewChildrenSuitcase!: QueryList<any>;
  public subsubheaders = {
    tech: [],
    cleanliness: [],
    clothes: [],
    medicines: [],
    documents: [],
    others: [],
    beach: [],
    sport: [],
    pet: [],
    baby: [],
  };
  public suitcaseShownList = {
    tech: [],
    cleanliness: [],
    clothes: [],
    medicines: [],
    documents: [],
    others: [],
    beach: [],
    sport: [],
    pet: [],
    baby: [],
  };

  private _suitcaseSavedList = {
    tech: [],
    cleanliness: [],
    clothes: [],
    medicines: [],
    documents: [],
    others: [],
    beach: [],
    sport: [],
    pet: [],
    baby: [],
  };

  constructor(
    private _suitcaseService: SuitcaseService,
    private readonly _changeDetector: ChangeDetectorRef,
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _dialog: MatDialog,
  ) {
  }

  public ngOnInit() {
    const sevenDaysDate = new Date();
    sevenDaysDate.setDate(sevenDaysDate.getDate() + 7);
    this._sevenDaysDateInMillis = sevenDaysDate.getTime();
    this.suitcase = this._suitcaseService.getCurrentSuitcase();
    this._fetchSuggestionList(this.suitcase.type, 1).subscribe((response: TripType) => {
      this.suggestionList = this._convertToModel(response);
      this.dataReady = true;
      this._changeDetector.detectChanges();
    });
    this.showWeather = this._checkShowWeather();
    this.weatherDays = this.showWeather ? Math.ceil((this._sevenDaysDateInMillis - this.suitcase.date.from.getTime()) / (1000*60*60*24)) : 0;
  }

  private _fetchSuggestionList(tripType: TripType, pageNr: number): Observable<TripType> {
    return this._suitcaseService.fetchRecommendations(tripType, pageNr);
  }

  private _convertToModel(tripType: TripType): TripType {
    if (tripType.sport) {
      tripType.sport.items = tripType.sport.items.flatMap((item: any) => {
        return item.items
      });
    }
    return tripType;
  }

  private _checkMoreRecommendations(type: string) {
    if (this.suggestionList[type].items.length < 5 ) {
      this.suggestionList[type].currentPage++;
      this._fetchSuggestionList(Object.assign({}, {[type]: this.suggestionList[type]}) as TripType, this.suggestionList[type].currentPage).subscribe((response: TripType) => {
        this.suggestionList[type].items = this.suggestionList[type].items.concat(response[type].items);
        if (this.suggestionList[type].items.length < 5 && this.suggestionList[type].currentPriority < 3) {
          this.suggestionList[type].currentPriority++;
          this._checkMoreRecommendations(type);
        }
        this._changeDetector.detectChanges();
      });
    }
  }

  private _checkShowWeather(): boolean {
    return !!this.suitcase && this.suitcase.date.from.getTime() < this._sevenDaysDateInMillis;
  }

  private _duplicatedInSuitcase(newName: string): boolean {
    return Object.keys(this.suitcaseShownList).some((key) => {
      return this.suitcaseShownList[key].some((item) => {
        return item.name === newName;
      })
    })
  }

  public showSubsubheader(type, name: string): boolean {
    return this.subsubheaders[type][0] && this.subsubheaders[type][0].name === name;
  }

  // ADD
  public addNewItem(item: string, formControl: any) {
    if (item) {
      if (this._duplicatedInSuitcase(item)) {
        formControl.setErrors({duplicated: true});
      } else {
        const newItem: TripItem = {
          name: item,
          isNew: true,
          show: false,
          priority: 1,
          type: this.selectedCategory,
        };
        this.newItem = '';
        this.selectedCategory = undefined;
        this._addItem(newItem);
      }
    }
  }
  public addItemFromChild(object: {item: TripItem, index?:number, itemList: TripItem[], listName: string}) {
    this._addItem(object.item, object.index, object.itemList, object.listName);
  }
  private _addItem(item: TripItem, index?:number, itemList?: TripItem[], listName?: string) {
    if (index > -1) {
      itemList.splice(index, 1);
    }
    const type = item.type ? item.type : 'others';
    item.quantity = 1;
    this.suitcaseShownList[type].push(item);
    this._suitcaseSavedList[type].push(item);
    setTimeout(() => {
      this.suitcaseShownList[type][this.suitcaseShownList[type].length - 1].show = true;
      this.subsubheaders[type].push(item);
      if (listName) {
        this._checkMoreRecommendations(listName); // not when its a new item
      }
      this.totalItemsInList++;
      this._changeDetector.detectChanges();
    }, 0)
  }

  // REMOVE
  public removeItemFromChild(object: {itemList: TripItem[], index:number, listName: string}) {
    this.removeItem(object.itemList, object.index, object.listName);
  }
  public removeItem(itemList: TripItem[], index:number, listName: string, viewChildren?: QueryList<any>, type?: string) {
    if (viewChildren) {
      // Alternate two keyframe animations
      this.counter % 2 ? this._renderer.addClass(viewChildren.toArray()[index].nativeElement, 'flip-out-ver-right') :
        this._renderer.addClass(viewChildren.toArray()[index].nativeElement, 'removedItem');
      this.counter++;
    }
    // When it finishes add it to the final list
    setTimeout(() => {
      if (listName && !viewChildren) { // not for suitcaseShownList
        this._checkMoreRecommendations(listName);
      }
      itemList.splice(index, 1);
      if (listName === 'suitcase') {
        this._suitcaseSavedList[type].splice(index, 1);
      }
      this.totalItemsInList--;
      this._changeDetector.detectChanges();
    }, 1000)
  }

  public submitSuitcase() {
    if (this.totalItemsInList > 0) {
      const dialogRef = this._dialog.open(SaveDialogComponent, {
        height: '200px',
        width: '400px',
        hasBackdrop: true,
      });
      dialogRef.afterClosed().subscribe((confirm: boolean) => {
        if (confirm || confirm === undefined) {
          this.suitcase.items = this._suitcaseSavedList;
          this._suitcaseService.saveSuitcase(this.suitcase, true);
        }
        dialogRef.close();
      });
    }
  }
}
