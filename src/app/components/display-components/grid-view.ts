import { Component, Input } from '@angular/core';
// import { Observable } from "rxjs/Rx";

import { BaseDisplayComponent } from './base-display-component';

@Component({
    selector: 'grid-view',
    templateUrl: `./components/display-components/grid-view.html`,
})
export class GridView extends BaseDisplayComponent {

    @Input() public model: any;
};
