import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataStorage = {};

  addData(key: string, data: any) {
    this.dataStorage[key] = data;
  }

  getData(key: string) {
    return this.dataStorage[key];
  }

  clearData(key: string) {
    this.dataStorage[key] = undefined;
  }
}