import { Component } from '@angular/core';
import { Router }   from '@angular/router';

import { SessionService } from './services/session.service';

@Component({
  moduleId : module.id,
  selector: 'phonebook',
  templateUrl: './templates/app.component.html'
})
export class AppComponent 
{
  displayHeader: boolean = true;
  displayRegistration: boolean = false;
  
  constructor(private session: SessionService,
              private router: Router)
  {
    this.router.events.subscribe((val) => {
      switch(this.router.url)
      {
        case "/index": this.displayHeader = true; break;
        default: this.displayHeader = false; 
      }
    });
  }
  
  loginVisible: boolean = false;
}
