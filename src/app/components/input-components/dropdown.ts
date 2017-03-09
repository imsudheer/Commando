import { Component, Input } from '@angular/core';
// import { Observable } from "rxjs/Rx";

import { BaseInputComponent } from './base-input-component';

@Component({
  selector: 'dropdown-editor',
  template: `
    <dl>
      <dt>{{propertyName}}</dt>
      <dd>
        <select
          [(ngModel)]="entity['city']"
          >
          <option   *ngFor="let _entity of entityList">{{_entity}}</option>
        </select>
      </dd>
    </dl>`,
})
export class DropdownEditor extends BaseInputComponent {
  @Input() public propertyName: string;
  @Input() public entity: any;
  @Input() public entityList: Array<string>;
};
