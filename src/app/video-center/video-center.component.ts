import { Component, OnInit } from '@angular/core';
import { Video } from './../video'

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos:Video[] = [
    {"_id":"1", "title":"Title 1", "url":"url 1", "description":"description 1"},
    {"_id":"2", "title":"Title 2", "url":"url 2", "description":"description 2"},
    {"_id":"3", "title":"Title 3", "url":"url 3", "description":"description 3"},
    {"_id":"4", "title":"Title 4", "url":"url 4", "description":"description 4"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
