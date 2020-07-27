import { VideoService } from './../video.service';
import { Video } from './../video';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.scss'],
})
export class VideoCenterComponent implements OnInit {
  public videos: Video[];

  public selectedVideo: Video;

  constructor(private _videoService: VideoService) {}

  ngOnInit(): void {
    this._videoService.getVideos().subscribe(
      (videos) => (this.videos = videos),
      (err) => console.log(err)
    );
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
  }
}
