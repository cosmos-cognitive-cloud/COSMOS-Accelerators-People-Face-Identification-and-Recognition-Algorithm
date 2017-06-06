import { BingAutofillSamplePage } from './app.po';

describe('bing-autofill-sample App', () => {
  let page: BingAutofillSamplePage;

  beforeEach(() => {
    page = new BingAutofillSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
