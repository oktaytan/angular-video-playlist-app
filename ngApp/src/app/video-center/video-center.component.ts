import { VideoService } from "./../video.service";
import { Video } from "./../video";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-video-center",
  templateUrl: "./video-center.component.html",
  styleUrls: ["./video-center.component.scss"],
})
export class VideoCenterComponent implements OnInit {
  public videos: Video[];
  public selectedVideo: Video;
  public hideNewVideo: boolean = true;

  constructor(private _videoService: VideoService) {}

  ngOnInit(): void {
    this.getAllVideos();
  }

  getAllVideos(): void {
    this._videoService.getVideos().subscribe(
      (videos) => (this.videos = videos),
      (err) => console.log(err),
    );
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this.hideNewVideo = true;
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video).subscribe((resNewVideo) => {
      this.videos.push(resNewVideo);
      this.hideNewVideo = true;
      this.selectedVideo = resNewVideo;
    });
  }

  newVideo() {
    this.hideNewVideo = false;
  }

  onUpdateVideoEvent(video: any) {
    this._videoService.updateVideo(video)
      .subscribe((resUpdateVideo) => video = resUpdateVideo);
    this.selectedVideo = null;
  }

  onDeleteVideoEvent(video: any) {
    this._videoService.deleteVideo(video)
      .subscribe((resUpdateVideo) => {
        this.getAllVideos();
      });
    this.selectedVideo = null;
  }
}
