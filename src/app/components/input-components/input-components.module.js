"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// make all parts as one DYNAMIC_DIRECTIVES
var core_1 = require("@angular/core");
var string_1 = require("./string");
var text_1 = require("./text");
var dropdown_1 = require("./dropdown");
exports.DYNAMIC_DIRECTIVES = [
    core_1.forwardRef(function () { return string_1.StringEditor; }),
    core_1.forwardRef(function () { return text_1.TextEditor; }),
    core_1.forwardRef(function () { return dropdown_1.DropdownEditor; })
];
// module itself
var core_2 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var InputComponentsModule = InputComponentsModule_1 = (function () {
    function InputComponentsModule() {
    }
    InputComponentsModule.forRoot = function () {
        return {
            ngModule: InputComponentsModule_1,
            providers: [],
        };
    };
    return InputComponentsModule;
}());
InputComponentsModule = InputComponentsModule_1 = __decorate([
    core_2.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        declarations: [
            exports.DYNAMIC_DIRECTIVES
        ],
        exports: [
            exports.DYNAMIC_DIRECTIVES,
            common_1.CommonModule,
            forms_1.FormsModule
        ]
    })
], InputComponentsModule);
exports.InputComponentsModule = InputComponentsModule;
var InputComponentsModule_1;
//# sourceMappingURL=input-components.module.js.map