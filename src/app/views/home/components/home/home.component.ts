import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilDestroyed } from '@orchestrator/ngx-until-destroyed';
import { Store, Select } from '@ngxs/store';
import { WorkPositionState, WorkPositionStateModel } from '../work-position/state/work-position.state';
import { WorkPosition } from '../work-position/state/work-position';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent implements OnInit, OnDestroy {

  private position: WorkPosition;

  @Select(WorkPositionState) data$: Observable<WorkPositionStateModel>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.data$.pipe(untilDestroyed(this))
      .subscribe((data: WorkPositionStateModel) => {
        this.position = data.workPosition;
      });
  }

  ngOnDestroy() {
  }
}
