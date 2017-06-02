import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions, Response, ResponseContentType, ResponseType } from '@angular/http';

@Injectable()
export class DataService {

    protected storageUrl = "https://cosmosstore.blob.core.windows.net/images/";
    protected localServer = "http://cosmosai-services.azurewebsites.net/";
    protected apiServer = "https://vivatechapi.cosmos.ai/";
    protected textApiServer = "https://westus.api.cognitive.microsoft.com/";
    protected bingApiServer = "https://api.cognitive.microsoft.com/bing/v5.0/";

    // VS: do not check this in
    protected cosmosApiServer = "https://cosmosai-services-qa.azurewebsites.net/";
    //protected cosmosApiServer = "http://localhost:5347/";

    constructor(protected http: Http) {

    }

    getAsPromise<T>(url: string, key: string) {
        let promise = new Promise<T>((resolve, reject) => {
            let options = this.setRequestOptions(key, "", false, false);
            return this.http.get(url, options).toPromise()
                .then((response: Response) => {
                    resolve(<T>response.json());
                })
                .catch((reason: any) => {
                    let errMsg = this.logError(reason);
                    reject(errMsg);
                });
        });
        return promise;
    }

    getAsPromiseWithJWT<T>(url: string) {
        let promise = new Promise<T>((resolve, reject) => {
            let options = this.setJWTHeader();

            return this.http.get(url, options).toPromise()
                .then((response: Response) => {
                    resolve(<T>response.json());
                })
                .catch((reason: any) => {
                    let errMsg = this.logError(reason);
                    reject(errMsg);
                });
        });
        return promise;
    }

    deleteAsPromiseWithJWT(url: string) {
        let options = this.setJWTHeader();
        return this.http.delete(url, options).toPromise();
    }

    public getAsPromiseWithAuthorizationToken<T>(url: string, token: string) {
        let promise = new Promise<T>((resolve, reject) => {
            let options = this.setRequestOptions("", token, false, false);
            return this.http.get(url, options).toPromise()
                .then((response: Response) => {
                    resolve(<T>response.json());
                })
                .catch((reason: any) => {
                    let errMsg = this.logError(reason);
                    reject(errMsg);
                });
        });
        return promise;
    }

    private doPost<T>(url: string, body: ArrayBuffer | string, options: any, resolve: Function, reject: Function) {
        return this.http.post(url, body, options).toPromise()
            .then((response: Response) => {
                let contentType = response.headers.get('Content-Type');
                if (contentType.indexOf('json') > -1) {
                    resolve(<T>response.json());
                } else {
                    let data = new Uint8Array(response.arrayBuffer());
                    let blob = <any>new Blob([data], { type: contentType });
                    resolve(<T>blob);
                }
            })
            .catch((reason: any) => {
                let errMsg = this.logError(reason);
                reject(errMsg);
            });
    }

    postTextData<T>(url: string, body: string, key: string, responseType = ResponseContentType.Json) {
        let promise = new Promise<T>((resolve, reject) => {
            let options = this.setRequestOptions(key, "", true, false, true, false, false, responseType);
            return this.doPost<T>(url, body, options, resolve, reject);
        });
        return promise;
    }

    postJSONData<T>(url: string, body: string, key: string, responseType = ResponseContentType.Json) {
        let promise = new Promise<T>((resolve, reject) => {
            let options = this.setRequestOptions(key, "", true, false, false, false, false, responseType);
            return this.doPost<T>(url, body, options, resolve, reject);
        });
        return promise;
    }

    postJSONDataWithJWT<T>(url: string, body: string, key: string, responseType = ResponseContentType.Json) {
        let promise = new Promise<T>((resolve, reject) => {
            let options = this.setRequestOptions(key, "", true, false, false, false, false, responseType);
            let token = localStorage.getItem('AUTH');
            options.headers.append("Authorization", token);
            return this.doPost<T>(url, body, options, resolve, reject);
        });
        return promise;
    }

    postTextDataWithAuthorizationToken<T>(url: string, body: string, key: string, token: string, responseType = ResponseContentType.Json) {
        let promise = new Promise<T>((resolve, reject) => {
            let options = this.setRequestOptions(key, "", true, false, true, false, false, responseType);
            options.headers.append("Authorization", token);
            return this.doPost<T>(url, body, options, resolve, reject);
        })
    }

    postFormData<T>(url: string, body: string, key: string, responseType = ResponseContentType.Json) {
        let promise = new Promise<T>((resolve, reject) => {
            let options = this.setRequestOptions(key, "", true, false, false, true, false, responseType);
            options.headers.append
            return this.doPost<T>(url, body, options, resolve, reject);
        });
        return promise;
    }

    postBinaryData<T>(url: string, body: ArrayBuffer, key: string, responseType = ResponseContentType.Json) {
        let promise = new Promise<T>((resolve, reject) => {
            let options = this.setRequestOptions(key, "", true, true, false, false, false, responseType);
            return this.doPost<T>(url, body, options, resolve, reject);
        });
        return promise;
    }

    postAsPromise<T>(url: string, body: any, key: string, responseType = ResponseContentType.Json) {
        let promise = new Promise<T>((resolve, reject) => {
            let options = this.setRequestOptions(key, "", true, false, false, false, false, responseType);
            return this.doPost<T>(url, body, options, resolve, reject);
        });
        return promise;
    }

    postAsPromiseWithMore<T>(url: string, body: any, key: string) {
        let options = this.setRequestOptions(key, "", true);

        let promise = new Promise<T>((resolve, reject) => {
            this.http.post(url, body, options).toPromise()
                .then((response: Response) => {
                    if (response.status == 202) {
                        let operationLocation = response.headers.get('Operation-Location');
                        if (!operationLocation) {
                            reject('No Operation-Location header found');
                        }
                        let interval = setInterval(() => {
                            this.http.get(operationLocation, options).toPromise()
                                .then((response: Response) => {
                                    let operationResult = <{ status: string, processingResult: any }>response.json();
                                    if (operationResult.status == 'Succeeded') {
                                        clearInterval(interval);
                                        resolve(<T>JSON.parse(operationResult.processingResult));
                                    }
                                })
                                .catch((reason: any) => {
                                    let errMsg = this.logError(reason);
                                    clearInterval(interval);
                                    reject(errMsg);
                                });
                        }, 5000);
                    }
                    else {
                        resolve(<T>response.json());
                    }
                })
                .catch((reason: any) => {
                    let errMsg = this.logError(reason);
                    reject(errMsg);
                });
        });
        return promise;
    }

    // getLocationFromHeader(response: Response, key: string) {
    //     var promise = new Promise<T>((resolve, reject) => {
    //         if (response.status == 202) {
    //             let options = this.setRequestOptions(key, true);
    //             let operationLocation = response.headers.get('Operation-Location');
    //             if (!operationLocation) {
    //                 reject('No Operation-Location header found');
    //             }
    //             let interval = setInterval(() => {
    //                 this.http.get(operationLocation, options).toPromise()
    //                     .then((response: Response) => {
    //                         let operationResult = <{ status: string, processingResult: any }>response.json();
    //                         if (operationResult.status == 'Succeeded') {
    //                             clearInterval(interval);
    //                             resolve(<T>JSON.parse(operationResult.processingResult));
    //                         }
    //                     })
    //                     .catch((reason: any) => {
    //                         this.handleError(reason);
    //                         clearInterval(interval);
    //                         reject(reason);
    //                     });
    //             }, 5000);
    //         }
    //         else {
    //             resolve(<T>response.json());
    //         }
    //     });
    //     return promise;
    // }

    // getAsObservable<T>(url: string, key: string) {
    //     let options = this.setRequestOptions(key, false);
    //     return this.http.get(url, options)
    //         .map((response: Response) => <T[]>response.json())
    //         .catch(this.handleError);
    // }

    // postAsObservable<T>(url: string, body: any, key: string) {
    //     let options = this.setRequestOptions(key, true);

    //     return this.http.post(url, JSON.stringify(body), options)
    //         .map((response: Response) => <T>response.json())
    //         .catch(this.handleError);
    // }

    public getToken(subscriptionKey: string): Promise<string> {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.onloadend = () => {
                resolve(xhr.response);
            }
            xhr.open('POST', 'https://api.cognitive.microsoft.com/sts/v1.0/issueToken', true);
            xhr.setRequestHeader('Content-Type', 'application/octet-stream');
            xhr.setRequestHeader('Ocp-Apim-Subscription-Key', subscriptionKey);
            xhr.send(null);
        })
    }



    private setRequestOptions(key: string, base64Authkey: string, post: boolean, binary = false, text = false, form = false, xml = false, responseType = ResponseContentType.Json, ) {
        let headersSet = false;
        let headers = new Headers();
        if (post) {
            if (binary) {
                headers.append('Content-Type', 'application/octet-stream');
            } else if (text) {
                headers.append('Content-Type', 'text/plain');
            } else if (form) {
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
            }
            else {
                headers.append('Content-Type', 'application/json');
            }
            headersSet = true;
        }
        if (key) {
            headers.append('Ocp-Apim-Subscription-Key', key);
            headersSet = true;
        }
        if (base64Authkey) {
            headers.append('Authorization', 'Bearer ' + base64Authkey);
            headersSet = true;
        }

        return headersSet ? {
            responseType: responseType,
            headers: headers
        } : null;
    }


    private setJWTHeader() {
        let headers = new Headers();
        let responseType = 'application/json';
        let token = localStorage.getItem('AUTH');

        headers.append('Authorization', token);

        return {
            headers: headers
        };
    }

    // private handleError(error: any) {
    //     let errMsg = this.logError(error);
    //     return Observable.throw(errMsg);
    // }

    private logError(error: any) {
        let errMsg = error.message ? error.message :
            error._body && error._body.code ? `${error._body.code} - ${error._body.message}` :
                error._body && error._body.error ? `${error._body.error.code} - ${error._body.error.message}` :
                    error.status ? `${error.status} - ${error.statusText}` : 'Error calling API';
        console.log(error);
        return errMsg;
    }
}
