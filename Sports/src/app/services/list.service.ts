import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const apiKey = 1

@Injectable({
  providedIn: 'root'
})

export class ListService {

  constructor(private http:HttpClient) { }

  getSports(){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/all_sports.php`)
  }
  getLeague(sport : string){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/search_all_leagues.php?s=${sport}`)
  }
}
