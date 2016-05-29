export class JenkinsDashboardPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jenkins-dashboard-app h1')).getText();
  }
}
