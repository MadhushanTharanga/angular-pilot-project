import {Component, OnInit} from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import {response} from "express";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {debounceTime} from "rxjs";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
  searchText=new FormControl();
  comments : any[]=[];
  constructor(private _service:CommentsService) {
  }

  loadAllData(){
    this._service.findAllComments().subscribe(response=>{
      this.comments=response;
      console.log(response)
    })
  }

  ngOnInit(): void {
    this.loadAllData();
  }


}
