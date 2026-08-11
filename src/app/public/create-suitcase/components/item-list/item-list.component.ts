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

  public counterToToggleAnimation = 1;
  readonly itemList = input<TripItem[]>();
  readonly maxShownList = input<number>();
  readonly listName = input<string>();
  private _subsubheadersInner = {};

  readonly itemViewChildren = viewChildren<ElementRef>('item');

  readonly onAddItem = output<{item: TripItem, index: number, itemList: TripItem[], listName: string}>();
  readonly checkRecommendations = output<string>();

  private readonly _changeDetector = inject(ChangeDetectorRef);
  private readonly _renderer = inject(Renderer2);

  public ngOnInit() {
    this._manageHeaders(this.itemList());
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
      baby: [],
      mountain: [],
      pet: [],
      sport: [],
    };
  }

  private _sortItems(itemList: TripItem[]) {
    itemList.sort((a, b) => (a.type < b.type ? -1 : 1));
  }

  private _manageHeaders(itemList: TripItem[]) {
    this._subsubheadersInner = JSON.parse(JSON.stringify(this.resetSubheaders()));
    itemList.forEach((item: TripItem) => {
      item.showInSuggestion = true;
      if (item.type) {
        this._subsubheadersInner[item.type].push(item);
      } else {
        item.type = 'others';
        this._subsubheadersInner['others'].push(item);
      }
    })
  }

  public addItem(item: TripItem, index?:number) {
    this.onAddItem.emit({item, index, itemList: this.itemList(), listName: this.listName()});
    // do async the rest of actions to allow the animations
    item.showInSuggestion = false;
    setTimeout(() => {
      this.removeAndOrganizeSuggestionList(index);
    }, 1000);
  }

  public removeItem(index:number, itemRef: HTMLElement) {
    this.counterToToggleAnimation % 2 ? this._renderer.addClass(itemRef, 'flip-out-ver-right') : this._renderer.addClass(itemRef, 'removedItem');
    this.counterToToggleAnimation++;
    
    // When the animations finishes remove it
    setTimeout(() => {
      this.removeAndOrganizeSuggestionList(index);
    }, 1000)
  }

  private removeAndOrganizeSuggestionList(index: number) {
    // remove it from the list
    this.itemList().splice(index, 1);
    this._manageHeaders(this.itemList());
    this._sortItems(this.itemList());
    if (this.itemList().length < 5) this.checkRecommendations.emit(this.listName());
    this._changeDetector.detectChanges();
  }

  public showSubsubheader(type: string, name: string): boolean {
    return this._subsubheadersInner[type][0] && this._subsubheadersInner[type][0].name === name;
  }
}

