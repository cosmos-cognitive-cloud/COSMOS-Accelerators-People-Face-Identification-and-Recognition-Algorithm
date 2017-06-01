import { Component, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
    selector: 'feature-info-line-item',
    templateUrl: './feature-info-line-item.component.html',
    styleUrls: ['./feature-info-line-item.component.css']
})
export class FeatureInfoItemComponent {
    @Input() featureTitle: string;
    @Input() featureDescription: string;
    @Input() featureImage: string;
    @Input() rowStyleClass: string;
    @Input() columnOffset: string;
    @Input() height: number;
    @Input() iconArrangement: string;

    imageSpecified: boolean;
    iconArrangementNormal: boolean;
    iconArrangementTight: boolean;

    constructor() {

    }

    ngOnInit() {
        if(this.iconArrangement == null)
        {
            this.iconArrangement = "normal";
            this.iconArrangementNormal = true;
            this.iconArrangementTight = false;
        }


        if(this.iconArrangement.trim().length == 0)
        {
            this.iconArrangement = "normal";
            this.iconArrangementNormal = true;
            this.iconArrangementTight = false;
        }

        if(this.iconArrangement.trim().toLowerCase() == "tight")
        {
            this.iconArrangement = "tight";
            this.iconArrangementNormal = false;
            this.iconArrangementTight = true;
        }
    }
}