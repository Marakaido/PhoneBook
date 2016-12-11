import { Component } from '@angular/core';
import { Router }   from '@angular/router';

import { SessionService } from './services/session.service';
import { UserService } from './services/user.service';
import { EntityBase, Person, Company } from './entities/EntityBase';

@Component({
  moduleId : module.id,
  selector: 'phonebook',
  templateUrl: './templates/app.component.html'
})
export class AppComponent 
{
  displayHeader: boolean = true;
  displayRegistration: boolean = false;
  displayLogin: boolean = false;
  displayIndex: boolean = true;

  searchResult: EntityBase[] = new Array<EntityBase>();

  searchString: string = "";
  constructor(private session: SessionService,
              private userService: UserService,
              private router: Router)
  {
    this.router.events.subscribe((val) => {
      switch(this.router.url)
      {
        case "/": this.displayHeader = true; this.displayIndex = true; break;
        default: this.displayHeader = false;  this.displayIndex = false;
      }
    });
  }

  search(event)
  {
    console.log(event);
    if(event.length > 0)
    {
      this.userService.search(event, event).subscribe(
        (result) => this.searchResult = <any>result,
        (error) => alert(error)
      );
    }
    else this.searchResult = null;
  }
  

  login()
  {
    this.displayLogin = true;
    this.displayRegistration = false;
    document.getElementById("popup").style.display = "block";
  }
  register()
  {
    this.displayRegistration = true;
    this.displayLogin = false;
    document.getElementById("popup").style.display = "block";
  }
  
  loginVisible: boolean = false;
}
