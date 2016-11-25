"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var people_component_1 = require('./people.component');
var registration_component_1 = require('./registration.component');
var user_service_1 = require('./services/user.service');
var session_service_1 = require('./services/session.service');
var contactInformation_service_1 = require('./services/contactInformation.service');
var personInfo_component_1 = require('./personInfo.component');
var login_component_1 = require('./login.component');
var personalPage_component_1 = require('./personalPage.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'people',
                        component: people_component_1.PeopleComponent
                    },
                    {
                        path: 'registration',
                        component: registration_component_1.RegistrationComponent
                    },
                    {
                        path: 'person/:email',
                        component: personInfo_component_1.PersonInfoComponent
                    },
                    {
                        path: 'personal-page',
                        component: personalPage_component_1.PersonalPageComponent
                    },
                    {
                        path: '',
                        redirectTo: 'people',
                        pathMatch: 'full'
                    }])
            ],
            declarations: [
                app_component_1.AppComponent,
                people_component_1.PeopleComponent,
                registration_component_1.RegistrationComponent,
                personInfo_component_1.PersonInfoComponent,
                login_component_1.LoginComponent,
                personalPage_component_1.PersonalPageComponent
            ],
            providers: [
                user_service_1.UserService,
                session_service_1.SessionService,
                contactInformation_service_1.ContactInformationService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map