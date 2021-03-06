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

  constructor(private session: SessionService,
              private userService: UserService,
              private router: Router)
  {
    this.router.events.subscribe((val) => {
      switch(this.router.url)
      {
        case "/": this.displayHeader = true; this.displayIndex = true; break;
        case "/personal-page": document.getElementById("popup").style.display = "none";
        default: this.displayHeader = false; this.displayIndex = false; 
      }
      this.displayLogin = false; 
      this.displayRegistration = false;
    });
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
  
  toggleMenu()
  {
    var x = document.getElementById("miniNavBar");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
  }

  onSuccessfulLogin(success: boolean)
  {
    alert("Logged in: " + success);
    if(success) 
    {
      this.displayLogin = false;
      document.getElementById("popup").style.display = "none";
    }
  }
}
