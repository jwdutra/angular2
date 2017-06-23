import { Projeto1Page } from './app.po';

describe('projeto1 App', () => {
  let page: Projeto1Page;

  beforeEach(() => {
    page = new Projeto1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
