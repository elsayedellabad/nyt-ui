import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key)!);
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }

  remove(key: string) {
    try {
      return localStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing data from localStorage', e);
      return null;
    }
  }

  clear() {
    try {
      return localStorage.clear();
    } catch (e) {
      console.error('Error removing data from localStorage', e);
      return null;
    }
  }
}
