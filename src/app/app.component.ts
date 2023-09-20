import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beauto-website';
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object, private wowService: NgwWowService) {

    // this.router.events.pipe(
    //   filter((event:any) => event instanceof NavigationEnd)
    // ).subscribe(x => this.wowService.init() )
    
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe(event => {
      if (isPlatformBrowser(this.platformId)) {
        window.scroll(0, 0);
        this.wowService.init(); // Load WoW animations when done navigating to page
      }
    });
  }
  
  }

