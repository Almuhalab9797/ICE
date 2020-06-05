import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';
//import { WhichTeamComponent } from './which-team/which-team.component';
import { WinPredictionComponent } from './win-prediction/win-prediction.component';
import { WhichTeam } from './select-team/which-team';



const routes: Routes = [

  {path: 'SelectTeam', component: SelectTeamComponent},/*, children: [
        {path: 'app-which-team', component: WhichTeamComponent}]},*/
  //{path: '', component: WhichTeam},
  //{path: 'WhichTeam', component: WhichTeamComponent},
  {path: 'WinPrediction', component: WinPredictionComponent},


  //{path: '**', component: WhichTeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
