import { Video } from './../video';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Output() selectVideo = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelect(video: Video) {
    this.selectVideo.emit(video);
  }
}
