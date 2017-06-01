import { Component, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'api-details-header',
    templateUrl: './api-details-header.component.html',
    styleUrls: ['./api-details-header.component.css']
})
export class ApiHeaderComponent {
    @Input() apiTitle: string;
    @Input() apiDescription: string;
    @Input() apiDescription2: string;
    @Input() rowStyleClass: string;

    imageSpecified: boolean;
    
    constructor() {

    }

    ngOnInit() {

    }
}