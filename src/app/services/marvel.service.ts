import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(public http: HttpClient) {}

  public getComics(offset, limit) {
    let url =
      'https://gateway.marvel.com/v1/public/comics?ts=1000&apikey=4991f6b67c071092dbe67b36faae5681&hash=f0de242ee98d75c3990f9ec4147faf73&title=Avengers' +
      '&offset=' +
      offset +
      '&limit=' +
      limit;

    return this.http.get(url).pipe(
      map((res: any) => {
        return res;
      }),
      retry(5)
    );
  }
}
