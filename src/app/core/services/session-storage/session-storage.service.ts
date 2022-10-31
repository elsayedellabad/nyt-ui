import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  set(key: string, data: any): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to sessionStorage', e);
    }
  }

  get(key: string) {
    try {
      return JSON.parse(sessionStorage.getItem(key)!);
    } catch (e) {
      console.error('Error getting data from sessionStorage', e);
      return null;
    }
  }

  remove(key: string) {
    try {
      return sessionStorage.removeItem(key);
    } catch (e) {
      console.error('Error removing data from sessionStorage', e);
      return null;
    }
  }

  clear() {
    try {
      return sessionStorage.clear();
    } catch (e) {
      console.error('Error removing data from sessionStorage', e);
      return null;
    }
  }
}
