/**
 * saves the key, value to storage
 * default persistence is false
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


export function saveToStorage(key: string, value: any, persist: boolean = false): void {  
  const jsonData = JSON.stringify(value);
  sessionStorage.setItem(key, jsonData);
  if (persist) {
    localStorage.setItem(key, jsonData);
  }
}

/**
 * gets the key, value from storage
 */
export function getFromStorage(key: string): any {
  let value = sessionStorage.getItem(key);
  if (!value) {
    value = localStorage.getItem(key);
  }
  return value !== 'undefined' ? JSON.parse(value) : null;
}

/**
 * removes the key, value from storage
 */
export function removeFromStorage(key: string): void {
  sessionStorage.removeItem(key);
  localStorage.removeItem(key);
}
