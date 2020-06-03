import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { WhichTeamComponent } from './which-team/which-team.component';


const routes: Routes = [

  {path: 'SelectTeam', component: SelectTeamComponent},
  {path: 'WhichTeam', component: WhichTeamComponent},
  {path: 'app-which-team', component: WhichTeamComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
