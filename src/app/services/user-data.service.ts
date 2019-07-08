import { Injectable } from '@angular/core';
import { ipcRenderer } from 'electron';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getData(): any {
    return new Observable(subscriber => {
      const data = ipcRenderer.sendSync('load-data');
      subscriber.next(data);
      subscriber.complete();
    });
  }

  saveData(data: any): void {
    ipcRenderer.sendSync('save-data', data);
  }
}
