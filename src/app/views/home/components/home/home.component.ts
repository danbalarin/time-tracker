import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgxElectronModule } from 'ngx-electron';
import { untilDestroyed } from '@orchestrator/ngx-until-destroyed';
import { Store, Select } from '@ngxs/store';
import { PositionState, PositionStateModel } from '../position/position.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent implements OnInit, OnDestroy {

  private position: Position;

  @Select(PositionState) data$: Observable<PositionStateModel>;

  constructor() { }

  ngOnInit() {
    this.data$.pipe(untilDestroyed(this))
      .subscribe((data: PositionStateModel) => { this.position = data.position; });
    // this.userDataService$.getData()
    //   .pipe(untilDestroyed(this))
    //   .subscribe(data => { this.data = data; });
  }

  ngOnDestroy() {
    // this.userDataService$.saveData(this.data);
  }
}
