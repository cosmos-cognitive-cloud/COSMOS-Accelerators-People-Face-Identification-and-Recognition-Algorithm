import { ResultFunc } from 'rxjs/observable/GenerateObservable';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CognitiveApiComponent } from '../cognitive-api.component';
import { SearchDataService } from '../services/search-data.service';
import { CognitiveApiService } from '../services/cognitive-api.service';
import { IBingAutosuggestResult } from '../models/bing-search-result.model';

import { DomSanitizer, Title } from '@angular/platform-browser';



@Component({
    selector: 'autosuggest-search',
    templateUrl: './bing-autosuggest.component.html',
    styleUrls: ['./bing-autosuggest.component.css']
})
export class BingAutosuggestComponent extends CognitiveApiComponent implements OnInit {
    searchKeyword = "";
    market = 'en-us';
    marketChoices: Array<string>;
    searchKeywordChanged: Subject<string> = new Subject<string>();
    searchResult: IBingAutosuggestResult;
    formattedResults: Array<{ displayText: string, url: string }> = [];
    showJSON = false;
    apiTitle = 'Bing\u2122 Autosuggest API';
    apiBackgroundImage = 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Page%20Header%20VIdeos/COSMOS-SingleView-NoLoop_828';
    apiDescription = 'Empower users to type less and do more with automated and complete search suggestions.';
    apiReferenceUrl = 'https://vivatech.cosmos.ai/docs/services/58de93f2ec585e0fa43d329d/operations/58de93f2ec585e07c81cbb83';//'https://vivatechapi.cosmos.ai/autosuggest/v5.0/?q=bill g&subscription-key=6fc5c859cee94cc7bd2833c4d729ea2e'//'https://dev.cognitive.microsoft.com/docs/services/56c7694ecf5ff801a090fbd1/operations/56c769a2cf5ff801a090fbd2';

    showCodeButtons = true;
    showLargeCodeOutput=false;

    public constructor(private titleService: Title, private searchDataService: SearchDataService, private cognitiveApiService: CognitiveApiService) {
        super();
        this.titleService.setTitle("AutoSuggest API");
        
    }

    ngOnInit() {
        this.isLoading = false;
        this.marketChoices = this.searchDataService.getMarkets();
        this.searchKeywordChanged
            .debounceTime(600) // wait after the last event before emitting last event
            .distinctUntilChanged() // only emit if value is different from previous value
            .subscribe(searchKeyword => {
                this.searchKeyword = searchKeyword;
                this.autosuggest();
            });
    }

    changed(keyword: string) {
        this.searchKeywordChanged.next(keyword);
    }

    autosuggest() {
        if (this.searchKeyword === '') {
            this.searchResult = null;
            this.formattedResults = [];
        } else {
            this.isLoading = true;
            this.searchDataService.autosuggest(this.searchKeyword, this.market)
                .then(searchResult => {
                    this.searchResult = searchResult;
                    this.getFormattedResults();
                    this.isLoading = false;
                })
                .catch((error) => {
                    this.errorMessage = error;
                    this.isLoading = false;
                });
        }
    }

    getFormattedResults() {
        this.formattedResults = [];
        let webResults = this.searchResult.suggestionGroups.filter(group => group.name === 'Web');
        if (webResults && webResults.length > 0) {
            this.formattedResults = webResults[0].searchSuggestions.map(result => {
                return {
                    displayText: result.displayText,
                    url: result.url
                };
            });
        }
    }

    toggleJSON(b: boolean) {
        this.showJSON = b;
    }

    openUsageGuidelines()
    {
        window.open("./bing-usage-guidelines","_self");
    }
}