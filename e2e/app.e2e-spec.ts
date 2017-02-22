import { RadtoolsPage } from './app.po';

describe('radtools App', function() {
  let page: RadtoolsPage;

  beforeEach(() => {
    page = new RadtoolsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rt works!');
  });
});
