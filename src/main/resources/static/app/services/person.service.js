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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var PersonService = (function () {
    function PersonService(http) {
        this.http = http;
    }
    PersonService.prototype.getPeople = function (page, count) {
        return this.http.get('/service/people-list?' + 'page=' + page + '&count=' + count)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PersonService.prototype.getPerson = function (email) {
        return this.http.get('/service/person/' + email + '/')
            .map(this.extractData)
            .catch(this.handleError);
    };
    PersonService.prototype.registerPerson = function (data) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", 'application/json');
        var requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            url: '/service/register-person',
            headers: headers,
            body: JSON.stringify(data)
        });
        return this.http.request(new http_1.Request(requestoptions))
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    PersonService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(res.json());
        return body;
    };
    PersonService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg = "Error";
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return null;
    };
    PersonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person.service.js.map