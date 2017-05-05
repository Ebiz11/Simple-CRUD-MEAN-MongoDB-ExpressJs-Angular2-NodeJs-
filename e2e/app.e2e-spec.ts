import { RestApiPage } from './app.po';

describe('rest-api App', () => {
  let page: RestApiPage;

  beforeEach(() => {
    page = new RestApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
