import { Component } from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import {response} from "express";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private _service:CommentsService) {
  }
  load(){
    this.loadAllData();
  }
  loadAllData(){
    this._service.findAllComments().subscribe(response=>{
      console.log(response)
    })
  }
}
