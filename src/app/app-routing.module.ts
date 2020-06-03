import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';
import { WhichTeamComponent } from './which-team/which-team.component';


const routes: Routes = [

  {path: 'SelectTeam', component: SelectTeamComponent},
  {path: 'WhichTeam', component: WhichTeamComponent},
<<<<<<< HEAD
=======
  {path: 'app-which-team', component: WhichTeamComponent},

>>>>>>> a9c3e769fe9ed65e5c81ec969f690d815ddeaf4d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
