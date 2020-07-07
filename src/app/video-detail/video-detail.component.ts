import { Component, OnInit, Input } from '@angular/core';
import { Video } from './../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  @Input() video:Video

  constructor() { }

  ngOnInit(): void {
  }

}
