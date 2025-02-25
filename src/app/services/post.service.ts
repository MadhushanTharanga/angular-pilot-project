import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  baseUrl = environment.url
  constructor(private _http:HttpClient) { }
  getAllPost():Observable<any>{
    return this._http.get(this.baseUrl+'/posts')
  }
}
