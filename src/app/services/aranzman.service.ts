import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ARANZMANI_ZA_AGENCIJU_URL, ARANZMAN_URL } from '../constants';
import { Aranzman } from '../models/aranzman';

@Injectable({
  providedIn: 'root'
})
export class AranzmanService {

  constructor(private httpClient:HttpClient) { }


  public getAranzmaniForAgencije(idAgencije:number):Observable<any>{
    return this.httpClient.get(`${ARANZMANI_ZA_AGENCIJU_URL}/${idAgencije}`);
  }
  public getAllAranzman():Observable<any>{
    return this.httpClient.get(`${ARANZMAN_URL}`);
  }

  public addAranzman(aranzman:Aranzman):Observable<any>{

    return this.httpClient.post(`${ARANZMAN_URL}`,aranzman);
  }

  public updateAranzman(aranzman:Aranzman):Observable<any>{

    return this.httpClient.put(`${ARANZMAN_URL}/${aranzman.id}`,aranzman);
  }

  public deleteAranzman(id:number):Observable<any>{

    return this.httpClient.delete(`${ARANZMAN_URL}/${id}`);
  }


}