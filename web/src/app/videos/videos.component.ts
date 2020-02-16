import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos:any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers:any = {'Accept': 'application/json', 'Content-Type': 'application/json'};
    this.http.get<any>('http://localhost:3001/api/v1/videos', {headers} ).subscribe(response => {
        this.videos = response.data;
    })
  }

}
