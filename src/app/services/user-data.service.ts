import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {

  constructor(private electronService$: ElectronService, private store: Store) { }

  getData(): Observable<any> {
    return new Observable(subscriber => {
      let data;
      if (this.electronService$.isElectronApp) {
        data = this.electronService$.ipcRenderer.sendSync('load-data');
      } else {
        data = localStorage.getItem('user_data');
      }
      subscriber.next(JSON.parse(data));
      subscriber.complete();
    });
  }

  saveData(data: any): void {
    if (this.electronService$.isElectronApp) {
      // this.electronService$.ipcRenderer.sendSync('save-data', data);
      this.electronService$.ipcRenderer.sendSync('save-data', JSON.stringify(this.store.snapshot()));
    } else {
      // localStorage.setItem('user_data', data);
      localStorage.setItem('user_data', JSON.stringify(this.store.snapshot()));
    }
  }
}
