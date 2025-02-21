import { Component } from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import {response} from "express";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  comments : any[]=[];
  constructor(private _service:CommentsService) {
  }
  load(){
    this.loadAllData();
  }
  loadAllData(){
    this._service.findAllComments().subscribe(response=>{
      this.comments=response;
      console.log(response)
    })
  }
}
