import { HoneyShopPage } from './app.po';

describe('honey-shop App', () => {
  let page: HoneyShopPage;

  beforeEach(() => {
    page = new HoneyShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
