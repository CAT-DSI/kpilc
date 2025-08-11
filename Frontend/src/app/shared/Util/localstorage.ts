/**
 * saves the key, value to storage
 * default persistence is false
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class localstoarage {
  constructor()
  {}
 saveToStorage1(key: string, value: any, persist: boolean = false): void {
  const jsonData = JSON.stringify(value);
 
    localStorage.setItem(key, jsonData);
}

/**
 * gets the key, value from storage
 */
 getFromStorage1(key: string): any {
 
  let  value = localStorage.getItem(key);
  return value !== 'undefined' ? JSON.parse(value) : null;
}

/**
 * removes the key, value from storage
 */
 removeFromStorage1(key: string): void {
  sessionStorage.removeItem(key);
  localStorage.removeItem(key);
}
}
