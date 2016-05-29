import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { JenkinsDashboardAppComponent } from '../app/jenkins-dashboard.component';

beforeEachProviders(() => [JenkinsDashboardAppComponent]);

describe('App: JenkinsDashboard', () => {
  it('should create the app',
      inject([JenkinsDashboardAppComponent], (app: JenkinsDashboardAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'jenkins-dashboard works!\'',
      inject([JenkinsDashboardAppComponent], (app: JenkinsDashboardAppComponent) => {
    expect(app.title).toEqual('jenkins-dashboard works!');
  }));
});
