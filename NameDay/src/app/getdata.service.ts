import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }
  names: Object
  getNameForToday() {

    return this.http.get('http://api.abalin.net/get/today');
  }
  getNameForTomorrow() {

    return this.http.get('https://api.abalin.net/get/tomorrow');
  }
  getNamesByName(name: string, countrycode: string) {
    return this.http.get(`https://api.abalin.net/get/getdate?name=${name}&calendar=${countrycode}`);
  }
  

}
