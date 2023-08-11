import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Renderer2,
  ViewChildren,
  QueryList,
  ViewEncapsulation,
  HostBinding,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuitcaseService } from '../../core/services/suitcase.service';
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
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaveDialogComponent } from "./components/dialog/save-dialog.component";
import { GENERAL_SNACKBAR_TIME } from "../../core/config/config";
import { ConfigService } from 'src/app/core/services/config.service';

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
  public createMode = true;
  @HostBinding('class.print-mode') public printMode = false;
  private _locale: string

  public dataReady = false;

  // Each of the categories in the suggestion column
  @ViewChildren('common') viewChildrenCommon!: QueryList<any>;
  @ViewChildren('sport') viewChildrenSport!: QueryList<any>;
  @ViewChildren('beach') viewChildrenBeach!: QueryList<any>;
  @ViewChildren('mountain') viewChildrenMountain!: QueryList<any>;
  @ViewChildren('pet') viewChildrenPet!: QueryList<any>;
  @ViewChildren('baby') viewChildrenBaby!: QueryList<any>;
  @ViewChildren('suitcase') viewChildrenSuitcase!: QueryList<any>;

  // headers of the subcategories
  public subsubheaders = {
    // common items
    tech: [],
    cleanliness: [],
    clothes: [],
    medicines: [],
    documents: [],
    others: [],
    // other categories
    baby: [],
    beach: [],
    mountain: [],
    pet: [],
    sport: [],
  };
  // suitcase shown in template
  public suitcaseList = {
    // common items
    tech: [] as TripItem[],
    cleanliness: [] as TripItem[],
    clothes: [] as TripItem[],
    medicines: [] as TripItem[],
    documents: [] as TripItem[],
    others: [] as TripItem[],
    // other categories
    baby: [] as TripItem[],
    beach: [] as TripItem[],
    mountain: [] as TripItem[],
    pet: [] as TripItem[],
    sport: [] as TripItem[],
  };

  constructor(
    private _suitcaseService: SuitcaseService,
    private readonly _changeDetector: ChangeDetectorRef,
    private _renderer: Renderer2,
    private _dialog: MatDialog,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _activatedRoute: ActivatedRoute,
    private _configService: ConfigService,
  ) {
  }

  public ngOnInit() {
    const sevenDaysDate = new Date();
    sevenDaysDate.setDate(sevenDaysDate.getDate() + 7);
    this._sevenDaysDateInMillis = sevenDaysDate.getTime();
    // Fetch the suitcase created in the previous steps with the basic information
    this.suitcase = this._suitcaseService.getCurrentSuitcase();
    this._locale = this._configService.getLocale()

    this._activatedRoute.data.subscribe(data => {
      this.createMode = data.createMode;
      if (!this.createMode) {
        // If coming to edit, there should be already a list of items, so we continue from there
        this.suitcaseList = this.suitcase.items;
        // and we show them
        Object.keys(this.suitcaseList).forEach((key: string) => {
          this.suitcaseList[key].forEach((item: TripItem) => {
            this.totalItemsInList++;
            item.showInSuitcase = true;
          })
        })
      }
    });

    // Fetch suggestions
    this._fetchSuggestionList(this.suitcase.type, 1, this._locale).subscribe((response: TripType) => {
      this.suggestionList = this._convertToModel(response);
      this.dataReady = true;
      this._changeDetector.detectChanges();
    });
    // show weather data if possible
    this.showWeather = this._checkShowWeather();
    this.weatherDays = this.showWeather ? Math.ceil((this._sevenDaysDateInMillis - new Date(this.suitcase.date.from).getTime()) / (1000*60*60*24)) : 0;
  }

  private _fetchSuggestionList(tripType: TripType, pageNr: number, lang: string): Observable<TripType> {
    return this._suitcaseService.fetchRecommendations(tripType, pageNr, lang);
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
    // Fetch more recommendations when one of the items has been removed from the suggestion list and there are less
    // than 5 items left in the list of the category
    if (this.suggestionList[type].items.length < 5 ) {
      // count the page we request to fetch next page in next iteration
      this.suggestionList[type].currentPage++;
      // Fetch a new list
      this._fetchSuggestionList(Object.assign({}, {[type]: this.suggestionList[type]}) as TripType, this.suggestionList[type].currentPage, this._locale).subscribe((response: TripType) => {
        // add the new items of the category to the ones of the same category
        this.suggestionList[type].items = this.suggestionList[type].items.concat(response[type].items);
        // if after the concatenation with the fetched items there are still less than 5 items and the priority of them
        // is higher than 3, decrease the priority and do the process over again.
        if (this.suggestionList[type].items.length < 5 && this.suggestionList[type].currentPriority < 3) {
          this.suggestionList[type].currentPriority++;
          this._checkMoreRecommendations(type);
        }
        let viewChildren: QueryList<any>;
        switch (type) {
          case 'sport': viewChildren = this.viewChildrenSport;
            break;
          case 'beach': viewChildren = this.viewChildrenBeach;
            break;
          case 'mountain': viewChildren = this.viewChildrenMountain;
            break;
          case 'pet': viewChildren = this.viewChildrenPet;
            break;
          case 'baby': viewChildren = this.viewChildrenBaby;
            break;
          default: viewChildren = this.viewChildrenCommon;
            break;
        }
        this._changeDetector.detectChanges();
        viewChildren.toArray()[0]._sortItems(viewChildren.toArray()[0].itemList);
        this._changeDetector.detectChanges();
      });
    }
  }

  private _checkShowWeather(): boolean {
    // show the weather panel if the dates of the trip are in the next 7 days
    return !!this.suitcase && new Date(this.suitcase.date.from).getTime() < this._sevenDaysDateInMillis;
  }

  private _duplicatedInSuitcase(newName: string): boolean {
    // when adding manually a new item, check if that item already exist in the provisional list
    return Object.keys(this.suitcaseList).some((key) => {
      return this.suitcaseList[key].some((item) => {
        return item.name === newName;
      })
    })
  }

  public showSubsubheader(type, name: string): boolean {
    // check if we must show the headers of the subcategories
    return this.subsubheaders[type][0] && this.subsubheaders[type][0].name === name;
  }

  // ADD
  public addNewItem(item: string, formControl: any) {
    // add a new item and set its default properties if it is not duplicated
    if (item) {
      if (this._duplicatedInSuitcase(item)) {
        formControl.setErrors({duplicated: true});
      } else {
        const newItem: TripItem = {
          name: item,
          isNew: true,
          showInSuitcase: false,
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
    // method to add a item from the suggestion panel
    this._addItem(object.item, object.index, object.itemList, object.listName);
  }
  private _addItem(item: TripItem, index?:number, suggestionList?: TripItem[], listName?: string) {
    // by def the type is the main category, except for beach, mountain and sport where the type is the subcategory and
    // otherwise consider the item in the 'other' category.
    const type = listName === 'beach' || listName === 'mountain' || listName === 'sport' ? listName : item.type ? item.type : 'others';
    item.quantity = 1;
    // add the item to the list to be shown in the provisional list and in the list to be saved
    this.suitcaseList[type].push(item);

    // do async the rest of actions to allow the animations
    setTimeout(() => {
      // change the status show to true to do the animation of appearing
      this.suitcaseList[type][this.suitcaseList[type].length - 1].showInSuitcase = true;
      this.subsubheaders[type].push(item);

      // if it comes from suggestion list, check it there is need to fetch more recommendations
      if (listName) {
        this._checkMoreRecommendations(listName); // not when its a new item
      }
      this.totalItemsInList++;
      this._changeDetector.detectChanges();
    }, 0)
  }

  // REMOVE
  public removeItemFromChild(object: {itemList: TripItem[], index:number, listName: string}) {
    // remove item from suggestions
    this.removeItem(object.itemList, object.index, object.listName);
  }
  public removeItem(itemList: TripItem[], index:number, listName: string, viewChildren?: QueryList<any>) {
    // if removing from the suggestions add a class to trigger an animation
    const fromSuggestionList = !viewChildren;
    if (!fromSuggestionList && viewChildren) {
      // Alternate two keyframe animations
      this.counter % 2 ? this._renderer.addClass(viewChildren.toArray()[index].nativeElement, 'flip-out-ver-right') :
        this._renderer.addClass(viewChildren.toArray()[index].nativeElement, 'removedItem');
      this.counter++;
    }
    // When the animations finishes remove it
    setTimeout(() => {
      // remove it from the list
      itemList.splice(index, 1);
      // if coming from suggestion list check the suggestions otherwise also remove it from the list to be saved
      if (fromSuggestionList) this._checkMoreRecommendations(listName);
      this.totalItemsInList--;
      this._changeDetector.detectChanges();
    }, 1000)
  }

  public printSuitcase(): void {
    window.onafterprint = (event) => {
      console.log('After print');
      this.printMode = false;
    };

    this.printMode = true;
    window.setTimeout(()=> { window.print()}, 0)
  }

  // SUBMIT
  public submitSuitcase(): void {
    if (this.totalItemsInList > 0) {
      // confirm it the user is sure he/she wants to save
      const dialogRef = this._dialog.open(SaveDialogComponent, {
        height: '200px',
        width: '400px',
        hasBackdrop: true,
      });
      dialogRef.afterClosed().subscribe((confirm: boolean) => {
        if (confirm || confirm === undefined) {
          this.suitcase.items = this.suitcaseList;
          this._suitcaseService.saveSuitcase(this.suitcase, true).subscribe(()=> {
            this._snackBar.open("The suitcase has been saved!!", '', {duration: GENERAL_SNACKBAR_TIME});
            this._router.navigate(['home']);
          });
        }
        dialogRef.close();
      }, (error: any) => {
        let snackBarRef = this._snackBar.open("There has been an error. The suitcase has not been saved yet, please try it again in a while or contact us", 'close');
        snackBarRef.onAction().subscribe(() => {
          snackBarRef.dismiss();
        });
      });
    }
  }
}
