import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DataService } from '../services/data.service';
import { IContactUs } from '../models/contact-us.model';

@Injectable()
export class ContactDataService extends DataService {

    constructor(protected http: Http) {
        super(http)
    }

    post(contactUs: IContactUs) {
        let apiUrl = this.localServer + 'api/email';
        return this.postAsPromise<IContactUs>(apiUrl, contactUs, null);
    }
}
