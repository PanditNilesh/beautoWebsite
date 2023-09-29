import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { filter } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
// import { NgcCookieConsentService } from 'ngx-cookieconsent';
// declare const cookieconsent: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'beauto-website';
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object, private wowService: NgwWowService, ) {
//private cookieServices: NgcCookieConsentService
// private cookieService: CookieService,

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
    // this.cookieService.set('User', 'Text');

  }
  ngOnInit(): void {
    // cookieconsent.initialise({
    //   palette: {
    //     popup: {
    //       background: "#000"
    //     },
    //     button: {
    //       background: "#f1d600"
    //     }
    //   },
    //   content: {
    //     message: "This website uses cookies to ensure you get the best experience on our website.",
    //     dismiss: "Got it!",
    //     link: "Learn more",
    //     href: "/privacy-policy" // Link to your privacy policy page
    //   }
    // });  
  } 
  }

