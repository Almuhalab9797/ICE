import { Component, OnInit } from '@angular/core';

import {Team} from '../team';

import {DataService} from '../data.service';
import {WhichTeamComponent} from '../which-team/which-team.component';

@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.css']
})
export class SelectTeamComponent implements OnInit {

  teams:Team[]; 
  selectedTeam: Team;

  //team: Team;
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getTeams(); 
  }


  onSelect(team: Team): void{
    console.log(team);
    this.selectedTeam = team;

    //WhichTeamComponent.onChoose(team);
  }


  getTeams(): void { 
      this.service.getTeams().subscribe(temp => { this.teams = temp;}); 
}

}
