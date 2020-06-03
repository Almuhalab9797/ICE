import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';

import {Team} from './team';
import {Game} from './game';

import {map} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getTeams() : Observable <Team[]> {

    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe( 
      map((data: any) => data.teams.map((item: any) => new Team( 
        item.id,  
        item.name, 
        item.abbrev,
        item.logo,
      ))) 
    ); 
  } 


  getGames() : Observable<Game[]> { 
      return this.http.get('https://api.squiggle.com.au/?q=games;round=20;year=2019').pipe( 
              map((data: any) => data.games.map((item: any) => new Game( 
              item.complete, 
              item.is_grand_final, 
              item.tz, 
              item.hbehinds, 
              item.ateam, 
              item.winnerteamid, 
              item.hgoals, 
              item.updated, 
              item.round, 
              item.is_final, 
              item.hscore, 
              item.abehinds, 
              item.winner, 
              item.ascore, 
              item.hteam, 
              item.ateamid, 
              item.venue, 
              item.hteamid, 
              item.agoals, 
              item.year, 
              item.date, 
              item.id 
            ))) 
          );  
        } 
}
