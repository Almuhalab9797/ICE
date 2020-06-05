import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import {HttpClientModule} from '@angular/common/http';
//import { WhichTeamComponent } from './which-team/which-team.component';
import { WinPredictionComponent } from './win-prediction/win-prediction.component';
import{FormsModule} from '@angular/forms';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectTeamComponent,
    //WhichTeamComponent,
    WinPredictionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // When ever we use services we have to put it in providers 
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
