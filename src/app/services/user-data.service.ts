import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {

  constructor(private electronService$: ElectronService) { }

  getData(): Observable<any> {
    return new Observable(subscriber => {
      let data;
      if (this.electronService$.isElectronApp) {
        data = this.electronService$.ipcRenderer.sendSync('load-data');
      } else {
        data = localStorage.getItem('user_data');
      }
      subscriber.next(data);
      subscriber.complete();
    });
  }

  saveData(data: any): void {
    if (this.electronService$.isElectronApp) {
      this.electronService$.ipcRenderer.sendSync('save-data', data);
    } else {
      localStorage.setItem('user_data', data);
    }
  }
}
