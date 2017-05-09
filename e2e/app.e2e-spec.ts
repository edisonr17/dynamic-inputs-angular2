import { DynamicFormPage } from './app.po';

describe('dynamic-form App', () => {
  let page: DynamicFormPage;

  beforeEach(() => {
    page = new DynamicFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
