import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseUrl = environment.url;
  constructor(private _http:HttpClient) { }

  findAllComments():Observable<any>{
    return this._http.get(this.baseUrl+'/comments')
  }
}
