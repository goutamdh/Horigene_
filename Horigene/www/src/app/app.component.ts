import { Component, OnDestroy, AfterContentChecked, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy, AfterContentChecked{
  title = 'base';
  private isLoading: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(


  	private ref: ChangeDetectorRef
  ) {
  }

  ngAfterContentChecked(){
  	this.ref.detectChanges();
  }

  get loading():boolean {
  	return this.isLoading;
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }

}
