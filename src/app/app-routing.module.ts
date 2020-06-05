import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { WhichTeamComponent } from './which-team/which-team.component';
import { WinPredictionComponent } from './win-prediction/win-prediction.component';
import { WhichTeam } from './select-team/which-team';
import { TeamResultsComponent } from './team-results/team-results.component';
import { TeamFixtureComponent } from './team-fixture/team-fixture.component';
import { TeamVenuesComponent } from './team-venues/team-venues.component';
import { LadderComponent } from './ladder/ladder.component';
import { AverageScoreComponent } from './average-score/average-score.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { LowAndHighScoreComponent } from './low-and-high-score/low-and-high-score.component';



const routes: Routes = [

  {path: 'SelectTeam', component: SelectTeamComponent},/*, children: [
        {path: 'app-which-team', component: WhichTeamComponent}]},*/
  //{path: '', component: WhichTeam},
  {path: 'which-team', component: WhichTeamComponent},
  {path: 'WinPrediction', component: WinPredictionComponent},
  {path: 'TeamResult', component: TeamResultsComponent},
  {path: 'TeamFixure', component: TeamFixtureComponent},
  {path: 'TeamVenue', component: TeamVenuesComponent},
  {path: 'Ladder', component: LadderComponent},
  {path: 'Average', component: AverageScoreComponent},
  {path: 'Head', component: HeadToHeadComponent},
  {path: 'High', component: LowAndHighScoreComponent},
  


  //{path:  component: WhichTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
