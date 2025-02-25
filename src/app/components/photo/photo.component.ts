import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {PhotoService} from "../../services/photo.service";

@Component({
  selector: 'app-photo',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss'
})
export class PhotoComponent implements OnInit{
  photos:any[]=[];
  constructor(private _service:PhotoService) {
  }
  loadAllPhotos(){
    this._service.getAllPhotos().subscribe(response=>{
      this.photos=response;
    })
  }

  ngOnInit(): void {
    this.loadAllPhotos()
  }

}
