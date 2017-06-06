import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { CognitiveApiService } from '../services/cognitive-api.service';
import { DataService } from '../services/data.service';
import { IBingSearchResult, IBingWebSearchResult, IBingAutosuggestResult } from '../models/bing-search-result.model';

@Injectable()
export class SearchDataService extends DataService {

    constructor(protected http: Http, private cognitiveApiService: CognitiveApiService) {
        super(http);
    }

    searchImages(keyword: string, market: string, safeSearch: string, color: string,
                 freshness: string, imageType: string, license: string, size: string): Promise<IBingSearchResult> {
        let url = `${this.bingApiServer}images/search?q=${keyword}&count=25&mkt=${market}&safeSearch=${safeSearch}`;
        if (color !== '(unspecified)') {
            url += `&color=${color}`;
        }
        if (freshness !== '(unspecified)') {
            url += `&freshness=${freshness}`;
        }
        if (imageType !== '(unspecified)') {
            url += `&imageType=${imageType}`;
        }
        if (license !== '(unspecified)') {
            url += `&license=${license}`;
        }
        if (size !== '(unspecified)') {
            url += `&size=${size}`;
        }
        return this.getAsPromise<IBingSearchResult>(url, this.cognitiveApiService.subscriptionKeys.bingSearch);
    }

    searchVideos(keyword: string, market: string, safeSearch: string, freshness: string,
                pricing: string, resolution: string, videoLength: string): Promise<IBingSearchResult> {
        let url = `${this.bingApiServer}videos/search?q=${keyword}&count=25&mkt=${market}&safeSearch=${safeSearch}`;
        if (freshness !== '(unspecified)') {
            url += `&freshness=${freshness}`;
        }
        if (pricing !== '(unspecified)') {
            url += `&pricing=${pricing}`;
        }
        if (resolution !== '(unspecified)') {
            url += `&resolution=${resolution}`;
        }
        if (videoLength !== '(unspecified)') {
            url += `&videoLength=${videoLength}`;
        }
        return this.getAsPromise<IBingSearchResult>(url, this.cognitiveApiService.subscriptionKeys.bingSearch);
    }

    searchNews(keyword: string, market: string, safeSearch: string, freshness: string): Promise<IBingSearchResult> {
        let url = `${this.bingApiServer}news/search?q=${keyword}&count=25&mkt=${market}&safeSearch=${safeSearch}`;
        if (freshness !== '(unspecified)') {
            url += `&freshness=${freshness}`;
        }
        return this.getAsPromise<IBingSearchResult>(url, this.cognitiveApiService.subscriptionKeys.bingSearch);
    }

    searchWeb(keyword: string, market: string, safeSearch: string, freshness: string, responseFilter: string): Promise<IBingWebSearchResult> {
        let url = `${this.bingApiServer}search?q=${keyword}&count=25&mkt=${market}&safeSearch=${safeSearch}`;
        if (freshness !== '(unspecified)') {
            url += `&freshness=${freshness}`;
        }
        if (responseFilter !== '(unspecified)') {
            url += `&responseFilter=${responseFilter}`;
        }
        return this.getAsPromise<IBingWebSearchResult>(url, this.cognitiveApiService.subscriptionKeys.bingSearch);
    }

    autosuggest(keyword: string, market: string): Promise<IBingAutosuggestResult> {
        let url = `${this.bingApiServer}?q=${keyword}&mkt=${market}`;
        return this.getAsPromise<IBingAutosuggestResult>(url, this.cognitiveApiService.subscriptionKeys.bingAutosuggest);
    }

    getMarkets() {
        return ['de-de', 'en-au', 'en-ca', 'es-es', 'en-gb', 'en-ie', 'en-in', 'es-mx', 'en-nz', 'en-us', 'fr-ca', 'fr-fr',
            'it-it', 'ja-jp', 'nl-nl', 'pt-br', 'zh-cn'];
    }

    getColors() {
        return ['(unspecified)', 'ColorOnly', 'Monochrome', 'Red', 'Orange', 'Yellow', 'Green', 'Teal', 'Blue', 'Purple', 'Pink', 'Brown',
            'Black', 'Gray', 'White'];
    }
}
