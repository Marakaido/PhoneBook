import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { PeopleComponent } from './people.component';
import { RegistrationComponent } from './registration.component'
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';
import { ContactInformationService } from './services/contactInformation.service';
import { PersonInfoComponent } from './personInfo.component';
import { LoginComponent } from './login.component';
import { PersonalPageComponent } from './personalPage.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: 'people',
        component: PeopleComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'person/:email',
        component: PersonInfoComponent
      },
      {
        path: 'personal-page',
        component: PersonalPageComponent
      },
      {
        path: '',
        redirectTo: 'people',
        pathMatch: 'full'
      }])
  ],
  declarations: [ 
    AppComponent,
    PeopleComponent,
    RegistrationComponent,
    PersonInfoComponent,
    LoginComponent,
    PersonalPageComponent
  ],
  providers: [
    UserService,
    SessionService,
    ContactInformationService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
