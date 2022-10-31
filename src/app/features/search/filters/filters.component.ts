import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SearchFiltersModel } from '../models/search-filters.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocalStorageService } from 'src/app/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  searchHistory: string[] = [];
  @Output() searchSubmits = new EventEmitter();
  filterForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private localStorageService: LocalStorageService
  ) {
    this.filterForm = this.formBuilder.group({
      q: [''],
    });
  }

  ngOnInit(): void {
    this.getSavedSearchHistory(false);
  }

  getSavedSearchHistory(openSearchHistoryMenu: boolean = false) {
    if (openSearchHistoryMenu) {
      const searchHistoryDiv = document.getElementById('search-history');
      if (searchHistoryDiv) {
        searchHistoryDiv.style.display = 'block';
      }
    }
    const user = this.localStorageService.get('user');
    if (user) {
      const email = user['email'];
      const savedSearchHistory = this.localStorageService.get(email);
      if (savedSearchHistory) {
        this.searchHistory = savedSearchHistory;
      }
    }
  }

  hideSearchHistoryMenu() {
    const searchHistoryDiv = document.getElementById('search-history');
    if (searchHistoryDiv) {
      searchHistoryDiv.style.display = 'none';
    }
  }

  applySearchWithHistoryItem(searchItem: string) {
    this.hideSearchHistoryMenu();
    this.filterForm.patchValue({ q: searchItem });
    let searchFilters: SearchFiltersModel = {
      q: searchItem,
    };
    this.searchSubmits.emit(searchFilters);
  }

  onSearchArticles(filterForm: FormGroup) {
    if (filterForm.invalid) {
      return;
    }

    let searchFilters: SearchFiltersModel = {
      q: filterForm.value.q,
    };
    this.hideSearchHistoryMenu();
    this.searchSubmits.emit(searchFilters);
  }

  resetForm() {
    let searchFilters: SearchFiltersModel = {
      q: '',
    };
    this.filterForm.reset();
    this.hideSearchHistoryMenu();
    this.searchSubmits.emit(searchFilters);
  }
}
