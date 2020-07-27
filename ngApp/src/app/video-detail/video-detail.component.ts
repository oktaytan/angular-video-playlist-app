import { VideoService } from "./../video.service";
import { Video } from "./../video";
import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "video-detail",
  templateUrl: "./video-detail.component.html",
  styleUrls: ["./video-detail.component.scss"],
})
export class VideoDetailComponent implements OnInit {
  @Input()
  video: Video;
  @Output()
  updateVideoEvent = new EventEmitter();
  @Output()
  deleteVideoEvent = new EventEmitter();

  public editTitle: boolean = false;
  constructor(private _videoService: VideoService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }

  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }
}
