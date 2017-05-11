import { ProductsCliPage } from './app.po';

describe('products-cli App', () => {
  let page: ProductsCliPage;

  beforeEach(() => {
    page = new ProductsCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
