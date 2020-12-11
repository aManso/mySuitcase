import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  OnInit,
  SimpleChanges,
  OnChanges,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import {TripItem} from "../../../../core/models/trip";

@Component({
  selector: 'my-suitcase-item-list',
  templateUrl: './item-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ItemListComponent implements OnInit, OnChanges {
  public counter = 1;
  @Input() itemList: TripItem[];
  @Input() maxShownList: number;
  @Input() listName: string;
  @Input() subsubheaders: any;
  private _subsubheadersInner = {};
  @ViewChildren('item') itemViewChildren!: QueryList<any>;
  @Output()
  public onAddItem: EventEmitter<{item: TripItem, index:number, itemList: TripItem[], listName: string}> = new EventEmitter<{item: TripItem, index:number, itemList: TripItem[], listName: string}>();

  @Output()
  public onRemoveItem: EventEmitter<{itemList: TripItem[], index:number, listName: string}> = new EventEmitter<{itemList: TripItem[], index:number, listName: string}>();

  constructor(
    private _renderer: Renderer2,
  ) {
  }

  public ngOnInit() {
    this._subsubheadersInner = JSON.parse(JSON.stringify(this.subsubheaders));
    Object.assign({}, this.subsubheaders);
    this._sortItems(this.itemList);
  }

  public ngOnChanges(changes: SimpleChanges) {
    // Extract changes to the input property by its name
    let simpleChange: any = changes['subsubheaders'];
// Whenever the data in the parent changes, this method gets triggered. You
// can act on the changes here. You will have both the previous value and the
// current value here.

  }

  private _sortItems(itemList: TripItem[]) {
    itemList.forEach((item: TripItem) => {
      if (item.type) {
        this._subsubheadersInner[item.type].push(item);
      } else {
        this._subsubheadersInner['others'].push(item);
      }
    })
  }

  public addItem(item: TripItem, index?:number, itemList?: TripItem[], ) {
    this.onAddItem.emit({item, index, itemList, listName: this.listName});
  }

  public removeItem(itemList: TripItem[], index:number) {
    this.counter % 2 ? this._renderer.addClass(this.itemViewChildren.toArray()[index].nativeElement, 'flip-out-ver-right') :
      this._renderer.addClass(this.itemViewChildren.toArray()[index].nativeElement, 'removedItem');
    this.counter++;
    this.onRemoveItem.emit({itemList, index, listName: this.listName});
  }

  public showSubsubheader(type, name: string): boolean {
    return this._subsubheadersInner[type][0] && this._subsubheadersInner[type][0].name === name;
  }
}

