import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private baseUrl=environment.url;
  constructor(private _http:HttpClient) { }

  getAllPhotos():Observable<any>{
    return this._http.get(this.baseUrl+'/photos')
  }
}
