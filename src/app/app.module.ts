import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import {HttpClientModule} from '@angular/common/http';
import { WhichTeamComponent } from './which-team/which-team.component';
import { WinPredictionComponent } from './win-prediction/win-prediction.component';
import{FormsModule} from '@angular/forms';
import { DataService } from './data.service';
import { TeamResultsComponent } from './team-results/team-results.component';
import { TeamFixtureComponent } from './team-fixture/team-fixture.component';
import { TeamVenuesComponent } from './team-venues/team-venues.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { LadderComponent } from './ladder/ladder.component';
import { AverageScoreComponent } from './average-score/average-score.component';
import { LowAndHighScoreComponent } from './low-and-high-score/low-and-high-score.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectTeamComponent,
    WhichTeamComponent,
    WinPredictionComponent,
    TeamResultsComponent,
    TeamFixtureComponent,
    TeamVenuesComponent,
    HeadToHeadComponent,
    LadderComponent,
    AverageScoreComponent,
    LowAndHighScoreComponent,
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
