import { Categories } from '../../models/categories.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss'],
})
export class CategoryFilterComponent {
  @Output() categorySelectionChanged = new EventEmitter();
  categories: Categories[] = [];
  selected = 'default';
  constructor() {
    this.categories = [
      { value: 'default', text: 'Top Stories' },
      { value: 'world', text: 'World' },
      { value: 'science', text: 'Science' },
    ];
  }

  onCategoryChange($event: MatSelectChange) {
    let value = $event.value;
    this.categorySelectionChanged.emit(value);
  }
}
