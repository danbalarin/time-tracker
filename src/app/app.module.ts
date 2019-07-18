import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { WorkPositionComponent } from './views/home/components/work-position/work-position.component';
// import { ElectronStorageEngine, NgxsElectronStorageModule } from 'ngxs-electron-storage';
import { NgxsStoragePluginModule, STORAGE_ENGINE } from '@ngxs/storage-plugin';
import { NgxElectronModule, ElectronService } from 'ngx-electron';
import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { MatToolbarModule, MatExpansionModule, MatInputModule, MatButtonModule, MatIconRegistry, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { WorkPositionState } from './views/home/components/work-position/state/work-position.state';
import { UserDataService } from './services/user-data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkPositionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      WorkPositionState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsElectronStorageModule.forRoot({
    //   debounce: 1000,
    //   location: '~\\data'
    // }),
    NgxsStoragePluginModule.forRoot(),
    FlexLayoutModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [
    NgxElectronModule,
    UserDataService,
    ElectronService,
    FormBuilder,
    MatIconRegistry
    // {
    //   provide: STORAGE_ENGINE,
    //   useClass: ElectronStorageEngine
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
