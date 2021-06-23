import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  nameEvent:EventEmitter<string> = new EventEmitter();
  questinEvent:EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient) { }

  public getDataFromApi(url:string){
    return this.http.get(url)
  }
}
