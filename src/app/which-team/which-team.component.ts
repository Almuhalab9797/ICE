<<<<<<< HEAD
import { Component, OnInit, Input, SimpleChange } from '@angular/core';
=======
import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';
>>>>>>> a9c3e769fe9ed65e5c81ec969f690d815ddeaf4d
import { Team } from '../team';
import {Game} from '../game';
import { DataService } from '../data.service';


<<<<<<< HEAD
=======


import { NgModule } from '@angular/core';

>>>>>>> a9c3e769fe9ed65e5c81ec969f690d815ddeaf4d
@Component({
  selector: 'app-which-team',
  templateUrl: './which-team.component.html',
  styleUrls: ['./which-team.component.css']
})
export class WhichTeamComponent implements OnInit {

  games: Game[];
  @Input() team: Team;
  
<<<<<<< HEAD
  constructor(private service: DataService) { }

  ngOnChange(changes: SimpleChange){
    if(changes['team']){
      console.log('You are in selected team!');
=======
  constructor(private service: DataService) { 
  }

  ngOnChange(changes: SimpleChange){
    if(changes['team']){
      this.getGames();
>>>>>>> a9c3e769fe9ed65e5c81ec969f690d815ddeaf4d
    }
  } 

  //onChoose(t: Team){}

  ngOnInit(): void {
<<<<<<< HEAD
  }

=======
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

>>>>>>> a9c3e769fe9ed65e5c81ec969f690d815ddeaf4d
}
