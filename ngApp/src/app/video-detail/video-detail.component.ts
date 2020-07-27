import { Video } from './../video';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
})
export class VideoDetailComponent implements OnInit {
  @Input() video: Video;
  public editTitle: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  updateVideo() {}
  deleteVideo() {}
}
