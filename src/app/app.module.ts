import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import {HttpClientModule} from '@angular/common/http';
import { WhichTeamComponent } from './which-team/which-team.component';
<<<<<<< HEAD
import { WinPredictionComponent } from './win-prediction/win-prediction.component';
=======
>>>>>>> a9c3e769fe9ed65e5c81ec969f690d815ddeaf4d

@NgModule({
  declarations: [
    AppComponent,
    SelectTeamComponent,
<<<<<<< HEAD
    WhichTeamComponent,
    WinPredictionComponent
=======
    WhichTeamComponent
>>>>>>> a9c3e769fe9ed65e5c81ec969f690d815ddeaf4d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
