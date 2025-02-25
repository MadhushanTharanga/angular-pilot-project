import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PhotoService} from "../../services/photo.service";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  posts:any[]=[];
  constructor(private _service:PostService) {
  }
  loadAllPosts(){
    this._service.getAllPost().subscribe(response=>{
      this.posts=response;
    })
  }

  ngOnInit(): void {
    this.loadAllPosts()
  }
}
