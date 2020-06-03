import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import {HttpClientModule} from '@angular/common/http';
import { WhichTeamComponent } from './which-team/which-team.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectTeamComponent,
    WhichTeamComponent
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
