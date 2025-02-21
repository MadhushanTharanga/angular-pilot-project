import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private baseUrl = environment.url;
  constructor(private _http:HttpClient) { }

  findAllComments():Observable<any>{
    return this._http.get(this.baseUrl+'/comments')
  }
}
