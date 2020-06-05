import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Team} from './team';
import {Game} from './game';
import {Tip} from './tip';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs'; // this is now correct 

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
        
        getTips(): Observable<Tip[]>{
          return this.http.get('https://api.squiggle.com.au/?q=tips').pipe(
            map((data: any) => data.tips.map((item: any) => new Tip(
              item.gameid,
              item.err,
              item.bits,
              item.tipteamid,
              item.venue,
              item.ateamid,
              item.round,
              item.sourceid,
              item.tips,
              item.date,
              item.confidence,
              item.source,
              item.hconfiedence,
              item.updated,
              item.hteamid,
              item.correct,
              item.hteam,
              item.margin,
              item.year,
              item.ateam,
          )))
          );
        }
}
