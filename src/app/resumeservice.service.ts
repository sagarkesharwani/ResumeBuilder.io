import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeserviceService {

  private showHeaderFooterSubject = new Subject<boolean>();
  public showHeaderFooter$ = this.showHeaderFooterSubject.asObservable();

  set showHeaderFooter(value: boolean) {
    this.showHeaderFooterSubject.next(value);
  }
  constructor() { }
}
