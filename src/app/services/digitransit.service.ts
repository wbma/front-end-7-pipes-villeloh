import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class DigitransitService {

  apiUrl = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql';

  constructor(private http: HttpClient) { }

  getRoutesByStopNameGraphQl(stopName: string) {

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/graphql')
    };

    const body = `{
        stops(name: "${stopName}") {
          patterns {
            route {
              longName
            }
            directionId
          }
        }
      }`;

    return this.http.post(this.apiUrl, body, options);
  } // end getRoutesByStopNameGraphQl()

} // end class
