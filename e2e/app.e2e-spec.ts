import { AngularSeedProjectPage } from './app.po';

describe('angular-seed-project App', function() {
  let page: AngularSeedProjectPage;

  beforeEach(() => {
    page = new AngularSeedProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
