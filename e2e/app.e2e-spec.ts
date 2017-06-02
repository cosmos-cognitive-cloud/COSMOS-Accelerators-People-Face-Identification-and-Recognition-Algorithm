import { FaceSamplePage } from './app.po';

describe('face-sample App', () => {
  let page: FaceSamplePage;

  beforeEach(() => {
    page = new FaceSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
