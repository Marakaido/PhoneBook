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
var EntityBase_1 = require('./entities/EntityBase');
var user_service_1 = require('./services/user.service');
var session_service_1 = require('./services/session.service');
var LoginComponent = (function () {
    function LoginComponent(userService, session) {
        this.userService = userService;
        this.session = session;
        this.user = new EntityBase_1.Person();
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user.email, this.user.password)
            .subscribe(function (user) { return _this.session.setUser(user); }, function (error) { return _this.errorMessage = "Authentication failed, please check your email and password"; });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './templates/login.component.html'
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, session_service_1.SessionService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map