import { JenkinsDashboardPage } from './app.po';

describe('jenkins-dashboard App', function() {
  let page: JenkinsDashboardPage;

  beforeEach(() => {
    page = new JenkinsDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jenkins-dashboard works!');
  });
});
