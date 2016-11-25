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
var EntityBase_1 = require('./entities/EntityBase');
var person_service_1 = require('./services/person.service');
var session_service_1 = require('./services/session.service');
var PersonRegistrationComponent = (function () {
    function PersonRegistrationComponent(personService, session, router, location) {
        this.personService = personService;
        this.session = session;
        this.router = router;
        this.location = location;
        this.person = new EntityBase_1.Person();
    }
    PersonRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        alert(JSON.stringify(this.person));
        this.personService.registerPerson(this.person).subscribe(function (response) { return _this.person = response; }, function (error) { return _this.responseMessage = error; }, function () { return _this.completeRegistration(); });
    };
    PersonRegistrationComponent.prototype.completeRegistration = function () {
        this.session.setUser(this.person);
        this.router.navigateByUrl("/personal-page");
    };
    PersonRegistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-registration',
            templateUrl: './templates/person-registration.component.html'
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, session_service_1.SessionService, router_1.Router, common_1.Location])
    ], PersonRegistrationComponent);
    return PersonRegistrationComponent;
}());
exports.PersonRegistrationComponent = PersonRegistrationComponent;
//# sourceMappingURL=personRegistration.component.js.map