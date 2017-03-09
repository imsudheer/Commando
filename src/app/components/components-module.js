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
var filter_component_1 = require("./filter-component");
// module itself
var core_2 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
exports.DYNAMIC_DIRECTIVES = [
    core_1.forwardRef(function () { return filter_component_1.FilterComponent; })
];
var ComponentsModule = ComponentsModule_1 = (function () {
    function ComponentsModule() {
    }
    ComponentsModule.forRoot = function () {
        return {
            ngModule: ComponentsModule_1,
            providers: [],
        };
    };
    return ComponentsModule;
}());
ComponentsModule = ComponentsModule_1 = __decorate([
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
], ComponentsModule);
exports.ComponentsModule = ComponentsModule;
var ComponentsModule_1;
//# sourceMappingURL=components-module.js.map