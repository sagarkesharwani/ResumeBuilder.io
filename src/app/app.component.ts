import { Component } from '@angular/core';
import { ResumeserviceService } from 'src/app/resumeservice.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHeaderAndFooter: boolean = true;

  constructor(private router: Router,private resumeService: ResumeserviceService) {
    // Subscribe to router events to detect when navigation is complete
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check the current route and update the showHeaderAndFooter property
        this.showHeaderAndFooter = event.url === '/' || event.url === '/home'|| event.url === '/devpage'|| event.url === '/testerpage'|| event.url === '/analystpage';
      }
    });
  }

}
