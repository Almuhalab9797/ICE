import { Component, OnInit } from '@angular/core';
import {Team} from '../team';
import {DataService} from '../data.service';
import {Game} from '../game';



@Component({
  selector: 'app-select-team',
  templateUrl: './select-team.component.html',
  styleUrls: ['./select-team.component.css']
})
export class SelectTeamComponent implements OnInit {

  teams :Team[]; 
  selectedTeam: Team;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.getTeams(); 
  }

  onSelect(team: Team): void{
    console.log(team);
    this.selectedTeam = team;

  }

  getTeams(): void { 
      this.service.getTeams().subscribe(temp => { this.teams = temp;}); 
  }


}
