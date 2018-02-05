import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipePipe implements PipeTransform {

  baseMediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  transform(value: any, size?: any): string {

    const defaultSize = '-tn320.png';
    let tempArray;
    let tempStr;

    tempArray = value.split('.'); // value = 'filename' attribute; result: [pic png]
    tempStr = tempArray[0]; // result: 'pic'
    return this.baseMediaUrl + tempStr + (size || defaultSize); // replace original image url
  }
} // end class
