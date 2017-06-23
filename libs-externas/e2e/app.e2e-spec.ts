import { LibsExternasPage } from './app.po';

describe('libs-externas App', () => {
  let page: LibsExternasPage;

  beforeEach(() => {
    page = new LibsExternasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
