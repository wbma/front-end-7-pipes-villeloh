
import { Component, OnInit } from '@angular/core';
import { MediaService } from './../services/media.service';
import { DigitransitService } from './../services/digitransit.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  baseMediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  mediaList: Array<string>;
  stopArray: any;

  constructor(public mediaService: MediaService, public digitransitService: DigitransitService) { }

  ngOnInit() {

    this.loadMedia();
  }

  loadMedia() {

    this.mediaService.getAllMedia()
    .subscribe( res => {
      this.mediaList = res;
      this.convertToThumbnailUrls(this.mediaList); // doesn't work directly with 'res'... I guess because it's a Response and not an array
    });

    this.digitransitService.getRoutesByStopNameGraphQl('Arkadian puisto')
    .subscribe( res => {
      this.stopArray = res['data'].stops;
    });
  } // end loadMedia()

  convertToThumbnailUrls(listOfMedia: any) {

    let tempArray;
    let tempStr;

    listOfMedia.map( item => {
      tempArray = item['filename'].split('.'); // list: 'pic.png'
      tempStr = tempArray[0]; // 'pic'
      item['filename'] = this.baseMediaUrl + tempStr + '-tn320.png'; // replace original image url
    });
  } // end convertToThumbnailUrls()

} // end class
