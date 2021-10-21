import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

/**
 * Service to manage all api calls to perform search
 *
 * @export
 * @class SearchService
 */
@Injectable()
export class SearchService {
  //private baseurl = environment.apiUrl + ':44053/SearchService';
  private baseurl: string;

  /**
   * Creates an instance of FileSystemService.
   *
   * @param {HttpService} httpService
   * @memberof FileSystemService
   */
  constructor(private httpService: HttpService) {}

  private baseUrl = "http://localhost:5000";

  /**
   * Function to form a rxjx based request search term
   *
   * @param {Observable<string>} terms
   * @param {any} params
   * @returns
   * @memberof SearchService
   */
  search(terms: Observable<string>) {
    return terms
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((term) =>
        this.searchQuery(
          // Form the request parameter
          { SearchTerms: [term] }
        )
      );
  }

  /**
   * Api call to search for a keyword or a file
   *
   * @param {any} request
   * @returns
   * @memberof SearchService
   */
  searchQuery(request) {
    return this.httpService.post(this.baseUrl + "/Search", request);
  }
}
