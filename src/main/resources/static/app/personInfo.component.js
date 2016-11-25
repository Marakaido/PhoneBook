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
var user_service_1 = require('./services/user.service');
var session_service_1 = require('./services/session.service');
var contactInformation_service_1 = require('./services/contactInformation.service');
var PersonInfoComponent = (function () {
    function PersonInfoComponent(userService, contactInformationService, session, route, location) {
        this.userService = userService;
        this.contactInformationService = contactInformationService;
        this.session = session;
        this.route = route;
        this.location = location;
        this.user = new EntityBase_1.Person();
    }
    PersonInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var email = params['email'];
            _this.userService.get(email).subscribe(function (response) {
                _this.user = response;
                _this.getContactInformation();
            }, function (error) { return _this.handleError; });
        });
    };
    PersonInfoComponent.prototype.getContactInformation = function () {
        var _this = this;
        this.contactInformationService.getPhones(this.user.email).subscribe(function (response) { return _this.phones = response; }, function (error) { return _this.errorMessage = error; });
        this.contactInformationService.getEmails(this.user.email).subscribe(function (response) { return _this.emails = response; }, function (error) { return _this.handleError(error); });
        this.contactInformationService.getAddresses(this.user.email).subscribe(function (response) { return _this.addresses = response; }, function (error) { return _this.handleError(error); });
    };
    PersonInfoComponent.prototype.handleError = function (error) {
        //alert(error);
    };
    PersonInfoComponent.prototype.goBack = function () {
        this.location.back();
    };
    PersonInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-info',
            templateUrl: './templates/person-info.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, contactInformation_service_1.ContactInformationService, session_service_1.SessionService, router_1.ActivatedRoute, common_1.Location])
    ], PersonInfoComponent);
    return PersonInfoComponent;
}());
exports.PersonInfoComponent = PersonInfoComponent;
//# sourceMappingURL=personInfo.component.js.map