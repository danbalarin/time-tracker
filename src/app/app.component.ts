import { InitWorkPosition } from './views/home/components/work-position/state/work-position.actions';
import { Store } from '@ngxs/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'time-tracker';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initStates();
  }

  initStates(): void {
    this.store.dispatch(new InitWorkPosition());
  }
}
