import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MediaService {

  constructor(private http: HttpClient) { }

  getAllMedia() {

    return this.http.get<string[]>('http://media.mw.metropolia.fi/wbma/media');
  }
}
