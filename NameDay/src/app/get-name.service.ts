import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetNameService {

  constructor(private http: HttpClient) { }

  getNameDay4Today() {
    return this.http.get('https://api.abalin.net/get/today')
  }
  getNamesbyName(name:string, country:string){
    return this.http.get(`https://api.abalin.net/get/getdate?name=${name}&calendar=${country}`)
  }

}

