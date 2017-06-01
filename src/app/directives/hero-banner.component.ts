import { Component, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';
import { ContactDataService } from '../services/contact-data.service';
import { IContactUs } from '../models/contact-us.model';

@Component({
    selector: 'hero-banner',
    templateUrl: './hero-banner.component.html',
    styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
    @Input() apiTitle: string;
    @Input() apiDescription: string;
    @Input() apiBackgroundImage: string;
    @Input() apiReferenceUrl: string;
    @Input() lightBackground: boolean;
    @Input() rightJustify = false;
    @Input() showContactButton = true;
    @Input() fullSize = true;
    @Input() showDevPortalActionButton = true;
    @Input() isPreview = false;
    @ViewChild('contactModal') contactModal: ModalDirective;
    contactUs: IContactUs;
    errorMessage: string;
    successMessage: string;
    submitted: boolean;
    modalHeight = (window.innerHeight - 170).toString() + "px";

    constructor(private contactDataService: ContactDataService) {
    }

    ngOnInit() {
        this.errorMessage = "";
        this.successMessage = "";
        this.submitted = false;
        this.contactUs = {
            firstName: '',
            lastName: '',
            email: '',
            organization: '',
            role: ''
        };

        window.onresize = (ev: UIEvent) => {
            this.modalHeight = (window.innerHeight - 170).toString() + "px";
        };
    }

    showChildModal() {
        this.contactModal.show();
    }

    public openDeveloperPortal()
    {
        window.open("https://dev.cosmos.ai/","_self");

    }

    submitForm() {
        this.submitted = true;
        this.contactDataService.post(this.contactUs).then(() => {
            this.successMessage = "Thank you for contacting us.";
            setTimeout(() => {
                this.contactModal.hide();
            }, 3000);
        })
        .catch((reason) => {
            this.errorMessage = "Error attempting to send contact request.";
        });
    }
}