import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TURISTICKA_AGENCIJA_URL } from '../constants';
import {Observable} from 'rxjs';
import { TuristickaAgencija } from '../models/turisticka-agencija';

@Injectable({
  providedIn: 'root'
})
export class TuristickaAgencijaService {

  constructor(private httpClient:HttpClient) { }

  public getAllTuristickaAgencija():Observable<any>{
  return this.httpClient.get(`${TURISTICKA_AGENCIJA_URL}`)
  }

  public addTuristickaAgencija(turistickaAgencija:TuristickaAgencija):Observable<any>{

    return this.httpClient.post(`${TURISTICKA_AGENCIJA_URL}`,turistickaAgencija);
  }

  public updateTuristickaAgencija(turistickaAgencija:TuristickaAgencija):Observable<any>{

    return this.httpClient.put(`${TURISTICKA_AGENCIJA_URL}/${turistickaAgencija.id}`,turistickaAgencija);
  }

  public deleteTuristickaAgencija(id:number):Observable<any>{

    return this.httpClient.delete(`${TURISTICKA_AGENCIJA_URL}/${id}`);
  }
}
