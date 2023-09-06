import { Component } from '@angular/core';
import { ResumeserviceService } from 'src/app/resumeservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  showHeader = true; 
  showFooter = true;

  constructor(private resumeService: ResumeserviceService) { }


  toggleHeaderFooter() {
    this.resumeService.showHeaderFooter;
  }
}
