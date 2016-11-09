import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { PeopleComponent } from './people.component';
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
      //{
        //path: 'person/:id',
        //component: PersonDetailComponent
      //}
      ])
  ],
  declarations: [ 
    AppComponent,
    PeopleComponent 
  ],
  providers: [
    PersonService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
