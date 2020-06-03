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
<<<<<<< HEAD

  //team: Team;
  constructor(private service: DataService) { }
=======
>>>>>>> a9c3e769fe9ed65e5c81ec969f690d815ddeaf4d

  //team: Team;
  constructor(private service: DataService) { }
  ngOnInit(): void {
    this.getTeams(); 
  }


  onSelect(team: Team): void{
<<<<<<< HEAD
    console.log(team);
=======
    //console.log(team);
>>>>>>> a9c3e769fe9ed65e5c81ec969f690d815ddeaf4d
    this.selectedTeam = team;

    //WhichTeamComponent.onChoose(team);
  }
<<<<<<< HEAD


=======
>>>>>>> a9c3e769fe9ed65e5c81ec969f690d815ddeaf4d
  getTeams(): void { 
      this.service.getTeams().subscribe(temp => { this.teams = temp;}); 
}
}
