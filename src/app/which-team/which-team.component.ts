/*import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { Team } from '../team';
import {Game} from '../game';
import { DataService } from '../data.service';

@Component({
  selector: 'app-which-team',
  templateUrl: './which-team.component.html',
  styleUrls: ['./which-team.component.css']

})

export class WhichTeamComponent implements OnInit{

  games: Game[];
  @Input() team: Team;
  teamSelected:Team;
  
  constructor(private service: DataService) {}

  ngOnChange(changes: SimpleChange):void {
    if(changes['team']){
      console.log("sfg");
      this.getGames();
    } 
  }

  ngOnInit(): void {
    console.log("GG");
    this.getGames(); 
  }


  getGames(): void { 
    this.service.getGames().subscribe(temp => { 
      var tempArr=[];

      console.log(this.team.id+"ojoj");
      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id){
          tempArr.push(element);
        }
      });
      this.games = tempArr;
    }); 
  } 
}*/
