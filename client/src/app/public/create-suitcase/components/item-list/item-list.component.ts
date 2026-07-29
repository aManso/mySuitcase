import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  input,
  output,
  viewChildren,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  inject
} from '@angular/core';
import { NgTemplateOutlet, SlicePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: true,
    imports: [NgTemplateOutlet, SlicePipe, MatIconModule, MatTooltipModule],
})
export class ItemListComponent implements OnInit {
  public counter = 1;
  readonly itemList = input<TripItem[]>();
  readonly maxShownList = input<number>();
  readonly listName = input<string>();
  private _subsubheadersInner = {};
  readonly itemViewChildren = viewChildren<ElementRef>('item');
  readonly onAddItem = output<{item: TripItem, index: number, itemList: TripItem[], listName: string}>();
  readonly onRemoveItem = output<{itemList: TripItem[], index: number, listName: string}>();

  private readonly _changeDetector = inject(ChangeDetectorRef);
  private readonly _renderer = inject(Renderer2);

  public ngOnInit() {
    this._sortItems(this.itemList());
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
      sport: [],
      pet: [],
      baby: [],
    };
  }

  public _sortItems(itemList: TripItem[]) {
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
    this.onAddItem.emit({item, index, itemList, listName: this.listName()});
    this._sortItems(this.itemList());
    // do async the rest of actions to allow the animations
    item.showInSuggestion = false;
    setTimeout(() => {
      this.itemList().splice(index, 1);
      this._sortItems(this.itemList());
      // trigger a refresh in parent component to let it know the item has been removed from the list
      this._changeDetector.markForCheck();
    }, 1000);
  }

  public removeItem(itemList: TripItem[], index:number) {
    this.counter % 2 ? this._renderer.addClass(this.itemViewChildren()[index].nativeElement, 'flip-out-ver-right') :
      this._renderer.addClass(this.itemViewChildren()[index].nativeElement, 'removedItem');
    this.counter++;
    this.onRemoveItem.emit({itemList, index, listName: this.listName()});
    this._sortItems(this.itemList());
    // trigger a refresh in parent component to let it know the item has been removed from the list
    this._changeDetector.markForCheck();
  }

  public showSubsubheader(type, name: string): boolean {
    return this._subsubheadersInner[type][0] && this._subsubheadersInner[type][0].name === name;
  }
}

