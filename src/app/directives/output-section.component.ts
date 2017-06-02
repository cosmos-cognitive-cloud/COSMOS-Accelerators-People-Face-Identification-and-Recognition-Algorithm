import { Component, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'output-section',
    templateUrl: './output-section.component.html',
    styleUrls: ['./output-section.component.css']
})
export class OutputSectionComponent {
    @Input() showButtons: boolean;
    @Input() buttonContextText: string;
    @Input() isApiResultLoading: boolean;
    @Input() jsonText: string;
    @Input() showJSON: boolean;
    
    constructor() {
        
    }


    ngOnInit() {
        
    }

     public toggleJSON(b: boolean) {
        this.showJSON = b;
    }
}