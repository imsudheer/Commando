"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// import { Observable } from "rxjs/Rx";
var base_input_component_1 = require("./base-input-component");
var TextEditor = (function (_super) {
    __extends(TextEditor, _super);
    function TextEditor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextEditor;
}(base_input_component_1.BaseInputComponent));
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TextEditor.prototype, "propertyName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TextEditor.prototype, "entity", void 0);
TextEditor = __decorate([
    core_1.Component({
        selector: 'text-editor',
        template: "\n    <dl>\n      <dt>{{propertyName}}</dt>\n      <dd>\n        <textarea cols=15 rows=5\n          [(ngModel)]=\"entity[propertyName]\" \n          ></textarea>\n      </dd>\n    </dl>",
    })
], TextEditor);
exports.TextEditor = TextEditor;
;
//# sourceMappingURL=text.js.map