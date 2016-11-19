import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { PeopleComponent } from './people.component';
import { PersonRegistrationComponent } from './personRegistration.component'
import { PersonService } from './services/person.service';
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
        path: 'person-registration',
        component: PersonRegistrationComponent
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
    PersonRegistrationComponent,
    PersonInfoComponent,
    LoginComponent,
    PersonalPageComponent
  ],
  providers: [
    PersonService,
    SessionService,
    ContactInformationService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
