import { PositionState } from './views/home/components/position/position.state';
import { UserDataService } from './services/user-data.service';
import { NgxElectronModule, ElectronService } from 'ngx-electron';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/components/home/home.component';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      PositionState
    ])
  ],
  providers: [NgxElectronModule, UserDataService, ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
