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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var type_builder_1 = require("./type.builder");
var template_builder_1 = require("./template.builder");
var DynamicDetail = (function () {
    // wee need Dynamic component builder
    function DynamicDetail(typeBuilder, templateBuilder) {
        this.typeBuilder = typeBuilder;
        this.templateBuilder = templateBuilder;
        // private d: any = { name: 'Neelesh' };
        // private city: string = 'Bangalore';
        this.city1 = { city: 'Bangalore' };
        // private cities: Array<string> = ['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi'];
        // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
        this.wasViewInitialized = false;
        // example entity ... to be recieved from other app parts
        // this is kind of candiate for @Input
        this.entity = {
            code: 'ABC123',
            description: 'A description of this Entity',
            active: 'true'
        };
    }
    /** Get a Factory and create a component */
    DynamicDetail.prototype.refreshContent = function (useTextarea) {
        var _this = this;
        if (useTextarea === void 0) { useTextarea = false; }
        if (this.componentRef) {
            this.componentRef.destroy();
        }
        // here we get a TEMPLATE with dynamic content === TODO
        //   valetr template = this.templateBuilder.prepareTemplate(this.entity, useTextarea);
        var template = "<dropdown-editor propertyName='city' [entity]=entity [entityList]=entityList></dropdown-editor>";
        // template += `<text-editor propertyName='city' [entity]=entity></text-editor>`;
        // here we get Factory (just compiled or from cache)
        this.typeBuilder
            .createComponentFactory(template)
            .then(function (factory) {
            // Target will instantiate and inject component (we'll keep reference to it)
            _this.componentRef = _this
                .dynamicComponentTarget
                .createComponent(factory);
            // let's inject @Inputs to component instance
            var component = _this.componentRef.instance;
            // component.entity = this.entity;
            component.entity = _this.city1;
            // component.entityList = this.cities;
        });
    };
    /** IN CASE WE WANT TO RE/Gerante - we need cean up */
    // this is the best moment where to start to process dynamic stuff
    DynamicDetail.prototype.ngAfterViewInit = function () {
        this.wasViewInitialized = true;
        this.refreshContent();
    };
    // wasViewInitialized is an IMPORTANT switch
    // when this component would have its own changing @Input()
    // - then we have to wait till view is intialized - first OnChange is too soon
    DynamicDetail.prototype.ngOnChanges = function (changes) {
        if (this.wasViewInitialized) {
            return;
        }
        this.refreshContent();
    };
    DynamicDetail.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    };
    return DynamicDetail;
}());
__decorate([
    core_1.ViewChild('dynamicContentPlaceHolder', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], DynamicDetail.prototype, "dynamicComponentTarget", void 0);
DynamicDetail = __decorate([
    core_1.Component({
        selector: 'dynamic-detail',
        template: "\n<div>\n  check/uncheck to use INPUT vs TEXTAREA:\n  <input type='checkbox' #val (click)='refreshContent(val.checked)' /><hr />\n  <div #dynamicContentPlaceHolder></div>  <hr />\n  entity: <pre>{{entity | json}}</pre>\n  <text-editor propertyName='name' [entity]='d'></text-editor>\n  <dropdown-editor propertyName='city' [entity]='city' [entityList]='cities'></dropdown-editor>\n  {{d.name}}, {{city1.city}}\n</div>\n",
    }),
    __metadata("design:paramtypes", [type_builder_1.DynamicTypeBuilder,
        template_builder_1.DynamicTemplateBuilder])
], DynamicDetail);
exports.DynamicDetail = DynamicDetail;
//# sourceMappingURL=detail.view.js.map