import {
  ChangeDetectorRef,
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import {TripItem} from "../../../../core/models/trip";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'my-suitcase-item-list',
  templateUrl: './item-list.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('showHiddenItem', [
      state('show', style({
        opacity: 1,
      })),
      state('hidden', style({
        opacity: 0,
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
export class ItemListComponent implements OnInit {
  public counter = 1;
  @Input() itemList: TripItem[];
  @Input() maxShownList: number;
  @Input() listName: string;
  private _subsubheadersInner = {};
  @Output()
  public onAddItem: EventEmitter<{item: TripItem, index:number, itemList: TripItem[], listName: string}> = new EventEmitter<{item: TripItem, index:number, itemList: TripItem[], listName: string}>();

  @Output()
  public onRemoveItem: EventEmitter<{itemList: TripItem[], index:number, listName: string}> = new EventEmitter<{itemList: TripItem[], index:number, listName: string}>();

  constructor(
    private _renderer: Renderer2,
    private readonly _changeDetector: ChangeDetectorRef,
  ) {
  }

  public ngOnInit() {
    this._sortItems(this.itemList);
  }

  private resetSubheaders() {
    return {
      tech: [],
      cleanliness: [],
      clothes: [],
      medicines: [],
      documents: [],
      others: [],
      beach: [],
      baby: [],
      mountain: [],
      pet: [],
      sport: [],
    };
  }

  private _sortItems(itemList: TripItem[]) {
    this._subsubheadersInner = JSON.parse(JSON.stringify(this.resetSubheaders()));
    itemList.forEach((item: TripItem) => {
      item.showInSuggestion = true;
      if (item.type) {
        this._subsubheadersInner[item.type].push(item);
      } else {
        this._subsubheadersInner['others'].push(item);
      }
    })
  }

  public addItem(item: TripItem, index?:number, itemList?: TripItem[], ) {
    this.onAddItem.emit({item, index, itemList, listName: this.listName});
    this._sortItems(this.itemList);
    // do async the rest of actions to allow the animations
    item.showInSuggestion = false;
    setTimeout(() => {
      this.itemList.splice(index, 1);
      this._sortItems(this.itemList);
      // trigger a refresh in parent component to let it know the item has been removed from the list
      this._changeDetector.markForCheck();
    }, 1000);
  }

  public removeItem(itemList: TripItem[], index:number, itemRef: HTMLElement) {
    this.counter % 2 ? this._renderer.addClass(itemRef, 'flip-out-ver-right') : this._renderer.addClass(itemRef, 'removedItem');
    this.counter++;
    this.onRemoveItem.emit({itemList, index, listName: this.listName});
    this._sortItems(this.itemList);
    // trigger a refresh in parent component to let it know the item has been removed from the list
    this._changeDetector.markForCheck();
  }

  public showSubsubheader(type, name: string): boolean {
    return this._subsubheadersInner[type][0] && this._subsubheadersInner[type][0].name === name;
  }
}

