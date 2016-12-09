import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { EntityIndexComponent } from './entityIndex.component';
import { RegistrationComponent } from './registration.component'
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';
import { ReviewService } from './services/review.service'
import { ContactInformationService } from './services/contactInformation.service';
import { LoginComponent } from './login.component';
import { PersonalPageComponent } from './personalPage.component';
import { UserInfoComponent } from './userInfo.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: 'index',
        component: EntityIndexComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'personal-page',
        component: PersonalPageComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: ':email',
        component: UserInfoComponent
      },
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      }])
  ],
  declarations: [ 
    AppComponent,
    EntityIndexComponent,
    RegistrationComponent,
    LoginComponent,
    PersonalPageComponent,
    UserInfoComponent
  ],
  providers: [
    UserService,
    SessionService,
    ContactInformationService,
    ReviewService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
