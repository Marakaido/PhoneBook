import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { PeopleComponent } from './people.component';
import { PersonRegistrationComponent } from './personRegistration.component'
import { PersonService } from './services/person.service';

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
        path: 'person',
        component: PersonRegistrationComponent
      }])
  ],
  declarations: [ 
    AppComponent,
    PeopleComponent,
    PersonRegistrationComponent
  ],
  providers: [
    PersonService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
