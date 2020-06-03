import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelectTeamComponent } from './select-team/select-team.component';


const routes: Routes = [

  // {path: '**', component: AppComponent},
  {path: 'SelectTeam', component: SelectTeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
