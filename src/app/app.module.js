"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var compiler_1 = require("@angular/compiler");
var app_component_1 = require("./app.component");
var dynamic_module_1 = require("./dynamic/dynamic.module");
var input_components_module_1 = require("./components/input-components/input-components.module");
var containers_module_1 = require("./containers/containers.module");
// import { FilterService } from './services/filter-service';
// import { FilterComponent } from './components/filter-component';
var HttpHelper_1 = require("./common/HttpHelper");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            http_1.HttpModule, forms_1.FormsModule, dynamic_module_1.DynamicModule.forRoot(),
            input_components_module_1.InputComponentsModule, containers_module_1.ContainersModule],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [HttpHelper_1.HttpHelper, compiler_1.COMPILER_PROVIDERS],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map