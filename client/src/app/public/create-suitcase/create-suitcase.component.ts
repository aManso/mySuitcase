import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Renderer2,
  ElementRef,
  viewChildren,
  ViewEncapsulation,
  inject,
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
import { FormsModule } from '@angular/forms';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { MatDialog, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SaveDialogComponent } from "./components/dialog/save-dialog.component";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { WeatherPanelComponent } from "./components/weather-panel/weather-panel.component";

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
    standalone: true,
    imports: [
      FormsModule,
      NgClass,
      NgTemplateOutlet,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatButtonModule,
      MatTooltipModule,
      MatDialogModule,
      ItemListComponent,
      WeatherPanelComponent,
    ],
    providers: [
      { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
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

  // Each of the categories in the suggestion column
  readonly viewChildrenCommon = viewChildren<ItemListComponent>('common');
  readonly viewChildrenSport = viewChildren<ItemListComponent>('sport');
  readonly viewChildrenBeach = viewChildren<ItemListComponent>('beach');
  readonly viewChildrenMountain = viewChildren<ItemListComponent>('mountain');
  readonly viewChildrenPet = viewChildren<ItemListComponent>('pet');
  readonly viewChildrenBaby = viewChildren<ItemListComponent>('baby');
  readonly viewChildrenSuitcase = viewChildren<ElementRef>('suitcase');

  // headers of the subcategories
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
  // suitcase shown in template
  public suitcaseList = {
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

  private readonly _suitcaseService = inject(SuitcaseService);
  private readonly _changeDetector = inject(ChangeDetectorRef);
  private readonly _elementRef = inject(ElementRef);
  private readonly _renderer = inject(Renderer2);
  private readonly _dialog = inject(MatDialog);

  public ngOnInit() {
    const sevenDaysDate = new Date();
    sevenDaysDate.setDate(sevenDaysDate.getDate() + 7);
    this._sevenDaysDateInMillis = sevenDaysDate.getTime();
    // Fetch the suitcase created in the previous steps with the basic information
    this.suitcase = this._suitcaseService.getCurrentSuitcase();
    // Fetch suggestions
    this._fetchSuggestionList(this.suitcase.type, 1).subscribe((response: TripType) => {
      this.suggestionList = this._convertToModel(response);
      this.dataReady = true;
      this._changeDetector.detectChanges();
    });
    // show weather data if possible
    this.showWeather = this._checkShowWeather();
    this.weatherDays = this.showWeather ? Math.ceil((this._sevenDaysDateInMillis - new Date(this.suitcase.date.from).getTime()) / (1000*60*60*24)) : 0;
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
    // Fetch more recommendations when one of the items has been removed from the suggestion list and there are less
    // than 5 items left in the list of the category
    if (this.suggestionList[type].items.length < 5 ) {
      // count the page we request to fetch next page in next iteration
      this.suggestionList[type].currentPage++;
      // Fetch a new list
      this._fetchSuggestionList(Object.assign({}, {[type]: this.suggestionList[type]}) as TripType, this.suggestionList[type].currentPage).subscribe((response: TripType) => {
        // add the new items of the category to the ones of the same category
        this.suggestionList[type].items = this.suggestionList[type].items.concat(response[type].items);
        // if after the concatenation with the fetched items there are still less than 5 items and the priority of them
        // is higher than 3, decrease the priority and do the process over again.
        if (this.suggestionList[type].items.length < 5 && this.suggestionList[type].currentPriority < 3) {
          this.suggestionList[type].currentPriority++;
          this._checkMoreRecommendations(type);
        }
        let childList: readonly ItemListComponent[];
        switch (type) {
          case 'sport': childList = this.viewChildrenSport();
            break;
          case 'beach': childList = this.viewChildrenBeach();
            break;
          case 'mountain': childList = this.viewChildrenMountain();
            break;
          case 'pet': childList = this.viewChildrenPet();
            break;
          case 'baby': childList = this.viewChildrenBaby();
            break;
          default: childList = this.viewChildrenCommon();
            break;
        }
        this._changeDetector.detectChanges();
        childList[0]._sortItems(childList[0].itemList());
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
    const type = item.type ? listName === 'beach' || listName === 'mountain' || listName === 'sport' ? listName : item.type : 'others';
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
  public removeItem(itemList: TripItem[], index:number, listName: string, children?: readonly ElementRef[]) {
    // if removing from the suggestions add a class to trigger an animation
    const fromSuggestionList = !children;
    if (!fromSuggestionList && children) {
      // Alternate two keyframe animations
      this.counter % 2 ? this._renderer.addClass(children[index].nativeElement, 'flip-out-ver-right') :
        this._renderer.addClass(children[index].nativeElement, 'removedItem');
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

  // SUBMIT
  public submitSuitcase() {
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
          this._suitcaseService.saveSuitcase(this.suitcase, true);
        }
        dialogRef.close();
      });
    }
  }
}
