import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
import { Team } from '../team';
import {Game} from '../game';
import { DataService } from '../data.service';




import { NgModule } from '@angular/core';

@Component({
  selector: 'app-which-team',
  templateUrl: './which-team.component.html',
  styleUrls: ['./which-team.component.css']
})
export class WhichTeamComponent implements OnInit {

  games: Game[];
  @Input() team: Team;
  
  constructor(private service: DataService) { }

  ngOnChange(changes: SimpleChange){
    if(changes['team']){
      console.log('You are in selected team!');
  constructor(private service: DataService) { 
  }

  ngOnChange(changes: SimpleChange){
    if(changes['team']){
      this.getGames();
    }
  } 

  //onChoose(t: Team){}

  ngOnInit(): void {
  }

    console.log("GG");
    this.getGames(); 
  }

  getGames(): void { 
    this.service.getGames().subscribe(temp => { 
      var tempArr=[];

      /*temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id){
          tempArr.push(element);
        }
      });*/
      this.games = tempArr;
    }); 
  } 

}
