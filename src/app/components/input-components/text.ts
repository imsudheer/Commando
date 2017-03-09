import { Component, Input } from '@angular/core';
// import { Observable } from "rxjs/Rx";

import { BaseInputComponent } from './base-input-component';

@Component({
    selector: 'text-editor',
    template: `
    <dl>
      <dt>{{propertyName}}</dt>
      <dd>
        <textarea cols=15 rows=5
          [(ngModel)]="entity[propertyName]" 
          ></textarea>
      </dd>
    </dl>`,
})
export class TextEditor extends BaseInputComponent {

    @Input() public propertyName: string;
    @Input() public entity: any;
};
