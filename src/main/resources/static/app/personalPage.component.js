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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var person_service_1 = require('./services/person.service');
var session_service_1 = require('./services/session.service');
var PersonalPageComponent = (function () {
    function PersonalPageComponent(personService, session, route, location) {
        this.personService = personService;
        this.session = session;
        this.route = route;
        this.location = location;
    }
    PersonalPageComponent.prototype.ngOnInit = function () {
        this.person = this.session.getUser();
    };
    PersonalPageComponent.prototype.goBack = function () {
        this.location.back();
    };
    PersonalPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'personal-page',
            templateUrl: './templates/personal-page.component.html'
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, session_service_1.SessionService, router_1.ActivatedRoute, common_1.Location])
    ], PersonalPageComponent);
    return PersonalPageComponent;
}());
exports.PersonalPageComponent = PersonalPageComponent;
//# sourceMappingURL=personalPage.component.js.map