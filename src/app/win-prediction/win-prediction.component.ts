import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { DataService } from '../data.service';
import {Tip} from '../tip';
import { Team } from '../team';

//import {Router} from '@angular/router';
@Component({
  selector: 'app-win-prediction',
  templateUrl: './win-prediction.component.html',
  styleUrls: ['./win-prediction.component.css']
})
export class WinPredictionComponent implements OnInit {

  tips: Tip[];
  @Input() team: Team;
  teamSelected:Team;

  constructor(private service: DataService) { }
    

  ngOnChange(changes: SimpleChange):void {
    if(changes['team']){
      this.getTips();
    } 
  }

  ngOnInit(): void {
    this.getTips();
  }
  
  getTips(): void{
    this.service.getTips().subscribe(temp => { 
      var tempArr=[];

      temp.forEach(element => {
        if(element.hteamid == this.team.id || element.ateamid == this.team.id){
          tempArr.push(element);
        }
      });
      this.tips = tempArr;
    }); 
  }
}
