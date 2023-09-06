import { Component } from '@angular/core';
import { ResumeserviceService } from 'src/app/resumeservice.service';

@Component({
  selector: 'app-beginner1-template',
  templateUrl: './beginner1-template.component.html',
  styleUrls: ['./beginner1-template.component.css']
})
export class Beginner1TemplateComponent {

  showHeader = false; 
  showFooter = false;

  constructor(private resumeService: ResumeserviceService) { }

  ngOnInit(): void {
    // Hide header and footer components
    this.resumeService.showHeaderFooter = false;
  }

  onContentChange(event: any) {
    const editedContent = event.target.innerHTML;
    // You can now use the editedContent as needed.
  }
}
