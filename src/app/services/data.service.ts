import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }
  getData():Observable<any>{
    return this._HttpClient.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
  }
  sentUserData(UserData:object):Observable<any>{
    return this._HttpClient.post(`http://upskilling-egypt.com:3001/contact`,UserData)
  }
   
}

