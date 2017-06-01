import { Component, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
    selector: 'feature-info-group',
    templateUrl: './feature-info-group.component.html',
    styleUrls: ['./feature-info-group.component.css']
})
export class FeatureInfoGroupComponent {
    imageSpecified: boolean;
    
    constructor() {

    }

    ngOnInit() {

    }
}