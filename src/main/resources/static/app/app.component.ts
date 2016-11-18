import { Component } from '@angular/core';
import { SessionService } from './services/session.service';

@Component({
  moduleId : module.id,
  selector: 'phonebook',
  templateUrl: './templates/app.component.html'
})
export class AppComponent 
{
  constructor(private session: SessionService) {}
  
  loginVisible: boolean = false;
}
