import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Homework} from '../homework/homework';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class NameListService {

  /**
   * Creates a new NameListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) { }

  // /**
  //  * Returns an Observable for the HTTP GET request for the JSON resource.
  //  * @return {string[]} The Observable for the HTTP request.
  //  */
  // get(): Observable<string[]> {
  //   return this.http.get('/assets/data.json')
  //                   .map((res: Response) => res.json())
  //                   .catch(this.handleError);
  // }

  get(): Observable<Homework[]> {
    var icons: string[] = ['glyphicon-music', 'glyphicon-heart', 'glyphicon-star', 'glyphicon-road', 'glyphicon-headphones'];

    return this.http.get('http://api.sanfor.com.cn/api/homeworks?theClass=class1')
      .map((res: Response) => {
        var hs = res.json();
        var homeworks: Homework[] = [];
        for (var i = 0; i < hs.length; ++i) {
          var catgoryDesc = '练习';
          homeworks.push({
            id: hs[i]._id,
            catgoryDesc: catgoryDesc,
            catgory: hs[i].catgory,
            date: (new Date(hs[i].date)).toLocaleDateString(),
            content: hs[i].content,
            icon: icons[Math.floor(Math.random() * icons.length)]
          });
        }
        console.log(homeworks);

        // console.log(response.json());
        return homeworks;
      })
      .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

