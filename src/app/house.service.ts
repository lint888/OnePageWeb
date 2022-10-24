import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { House } from './House';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }
  private houseRUL = 'http://localhost:8080/houseInfo';

  getHouse() :  Observable<House[]>{

    


    return this.http.get<House[]>(this.houseRUL);

  }
}
