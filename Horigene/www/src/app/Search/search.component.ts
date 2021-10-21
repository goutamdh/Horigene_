import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { SearchService } from './Services/search.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/repeat';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

	public form: FormGroup;
	public isSubmitted: boolean = false;
  private subscription: Subscription = new Subscription();
  searchTerm = new Subject<string>();
  results: any;
  isVisible = true;
  constructor(
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.subscription = new Subscription();
    this.searchService.search(this.searchTerm)
    // Catch errors
    .catch((err) => {
      console.error(err);
      this.results = null;
      return Observable.empty();
    })
    // re-subscribe to completed observable
    .repeat()
    .subscribe(results => {
      this.isVisible = true;
      console.log(results);
      if (results) {
        this.results = results['Value'] ? results['Value'] : [];
      } else {
        this.results = null;
      }
    });
  }

  get f(){
  	return this.form.controls;
  };


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
