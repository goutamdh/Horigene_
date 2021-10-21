
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/**
 * Utils service method that can be used to make all the differet service calls
 *
 * @export
 * @class HttpService
 */
@Injectable()
export class HttpService {
  /**
   * Creates an instance of HttpService.
   *
   * @param {HttpClient} http
   * @memberof HttpService
   */
  constructor(private http: HttpClient) { }

  /**
   * For handling all get requests
   *
   * @template T
   * @param {string} url
   * @param {{}} options
   * @returns {Observable<T>}
   * @memberof HttpService
   */
  get<T>(url: string, options: {} = {}): Observable<T> {
    return this.http.get<T>(url, options)
      .map((response) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  /**
   * For handling all post requests
   *
   * @template T
   * @param {string} url
   * @param {string} body
   * @param {{}} options
   * @returns {Observable<T>}
   * @memberof HttpService
   */
  post<T>(url: string, body: string = null, options?:object): Observable<T> {
    if (options ==null){
      options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
  }
  else{
    options =options
  }
    return this.http.post<T>(url, body, options)
      .map((response) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  /**
   * For handling all put requests
   *
   * @template T
   * @param {string} url
   * @param {string} body
   * @param {{}} options
   * @returns {Observable<T>}
   * @memberof HttpService
   */
  put<T>(url: string, body: any = null, options: {} = {}): Observable<T> {
    return this.http.put<T>(url, body, options)
      .map((response) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  /**
   * For handling all delete requests
   *
   * @template T
   * @param {string} url
   * @param {{}} options
   * @returns {Observable<T>}
   * @memberof HttpService
   */
  delete<T>(url: string, param: any = null): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders(), body: param
    };
    return this.http.delete<T>(url, httpOptions)
      .map((response) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  /**
   * For handling all patch requests
   *
   * @template T
   * @param {string} url
   * @param {string} body
   * @param {{}} options
   * @returns {Observable<T>}
   * @memberof HttpService
   */
  patch<T>(url: string, body: string, options: {} = {}): Observable<T> {
    return this.http.patch<T>(url, body, options)
      .map((response) => {
        return response;
      })
      .catch((error) => {
        return Observable.throw(error);
      });
  }
}
