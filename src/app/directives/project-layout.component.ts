import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
    selector: 'project-layout',
    templateUrl: './project-layout.component.html',
    styleUrls: ['./project-layout.component.css']
})
export class ProjectLayoutComponent {
    @Input() screenTitle: string;

    @Input() showBackButton: boolean = false;
    @Input() backButtonText: string;
    @Input() backButtonURL: string;

    @Input() showAdditionalActionButton: boolean = false;
    @Input() additionalActionButtonText: boolean;
    @Input() additionalActionButtonURL: string;

    @Input() showProjectDetails: boolean = false;
    @Input() projectName: string;
    @Input() projectCode: string;

    @Output() goBack = new EventEmitter<string>();
    @Output() additionalAction = new EventEmitter<string>();

    @Input() showRightMenu: boolean = false;
    @Output() cancelAllSubscription = new EventEmitter<boolean>();

    constructor() {

    }

    ngOnInit() {

    }

    public backEvent() {
        this.goBack.emit(this.backButtonURL);
    }

    public additionalActionEvent() {
        this.additionalAction.emit(this.additionalActionButtonURL);
    }

    public cancelAllClickEvent() {
        this.cancelAllSubscription.emit(true);
    }

}