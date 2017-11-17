import { TeamAppPage } from './app.po';

describe('team-app App', () => {
  let page: TeamAppPage;

  beforeEach(() => {
    page = new TeamAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
