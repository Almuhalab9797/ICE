import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { Team } from '../team';
import {Game} from '../game';
import { DataService } from '../data.service';


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
    }
  } 

  //onChoose(t: Team){}

  ngOnInit(): void {
  }

}
