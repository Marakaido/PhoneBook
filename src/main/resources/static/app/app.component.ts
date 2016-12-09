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
  constructor(private session: SessionService,
              private router: Router)
  {
    /*this.router.events.subscribe((val) => {
      this.displayHeader = false;
    });*/
  }
  
  loginVisible: boolean = false;
}
