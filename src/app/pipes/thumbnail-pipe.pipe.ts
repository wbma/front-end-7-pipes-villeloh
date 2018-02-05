import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipePipe implements PipeTransform {

  baseMediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  transform(value: any, size?: string): string {

    const defaultSize = '-tn320.png';
    let usedSize;

    if (size === null || (size !== 'small' && size !== 'large') ) {
      usedSize = defaultSize;
    } else if (size === 'small') {
      usedSize = '-tn160.png';
    } else if (size === 'large') {
      usedSize = '-tn640.png';
    }

    let tempArray;
    let tempStr;

    tempArray = value.split('.'); // value = 'filename' attribute; result: [pic png]
    tempStr = tempArray[0]; // result: 'pic'
    return this.baseMediaUrl + tempStr + usedSize; // replace original image url
  }
} // end class
