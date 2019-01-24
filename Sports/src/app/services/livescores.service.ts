import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const apiKey = 1

@Injectable({
  providedIn: 'root'
})

export class LivescoresService {

  constructor(private http : HttpClient) { }
  
  getLivescores(){
    return this.http.get(`https://www.thesportsdb.com/api/v1/json/${apiKey}/latestsoccer.php`)
  }
}
