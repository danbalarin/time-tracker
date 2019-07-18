import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

import { untilDestroyed } from '@orchestrator/ngx-until-destroyed';
import { WorkPositionState, WorkPositionStateModel } from './state/work-position.state';
import { WorkPosition } from './state/work-position';
import { UpdateWorkPosition } from './state/work-position.actions';

@Component({
  selector: 'work-position',
  templateUrl: './work-position.component.html',
  styleUrls: ['./work-position.component.scss']
})
export class WorkPositionComponent implements OnInit, OnDestroy {

  @Select(WorkPositionState) data$: Observable<WorkPositionStateModel>;

  data: WorkPosition;

  form: FormGroup;
  oldValue: WorkPosition;
  _isDisabled: boolean;

  get isDisabled() {
    return this._isDisabled;
  }

  set isDisabled(newVal: boolean) {
    if (newVal) {
      this.form.setValue(this.oldValue);
      this.form.disable();
    } else {
      this.oldValue = this.form.value;
      this.form.enable();
    }
    this._isDisabled = newVal;
  }

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.data$.pipe(untilDestroyed(this)).subscribe(data => {
      this.data = data.workPosition;
      this.form = this.fb.group(this.data);
      this.oldValue = this.data;
      this.isDisabled = true;
    });
  }

  save(): void {
    this.store.dispatch(new UpdateWorkPosition(this.form.value));
    this.isDisabled = true;
  }


  ngOnDestroy(): void {
  }
}
