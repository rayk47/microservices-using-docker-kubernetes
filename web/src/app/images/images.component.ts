import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images:any;
  constructor(private http: HttpClient) { }

   ngOnInit() {      
    const headers:any = {'Accept': 'application/json', 'Content-Type': 'application/json'};
    this.http.get<any>('http://localhost:3000/api/v1/images', {headers} ).subscribe(response => {
        this.images = response.data;
    })
}

}
