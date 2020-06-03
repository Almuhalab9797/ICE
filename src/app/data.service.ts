import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';

import {Team} from './team';
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
}
