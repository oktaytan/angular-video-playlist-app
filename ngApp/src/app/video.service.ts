import { Video } from "./video";
import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class VideoService {
  private _url = "http://localhost:3000/api/videos/";

  constructor(private _http: HttpClient) {}

  getVideos() {
    return this._http.get<any>(this._url);
  }

  addVideo(video: Video) {
    return this._http.post<any>(this._url, video);
  }

  updateVideo(video: Video) {
    return this._http.put<any>(this._url + video._id, video);
  }

  deleteVideo(video: Video) {
    return this._http.delete<any>(this._url + video._id);
  }
}
