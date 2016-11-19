"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EntityBase_1 = require('./EntityBase');
var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        _super.apply(this, arguments);
    }
    return Person;
}(EntityBase_1.EntityBase));
exports.Person = Person;
//# sourceMappingURL=Person.js.map