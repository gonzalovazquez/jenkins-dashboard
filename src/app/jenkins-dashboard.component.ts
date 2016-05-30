import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

export class Job {
  name: string;
  url: string;
  color: string
}

@Component({
  moduleId: module.id,
  selector: 'jenkins-dashboard-app',
  templateUrl: 'jenkins-dashboard.component.html',
  styleUrls: ['jenkins-dashboard.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class JenkinsDashboardAppComponent {
  title = 'Jenkins Dashboard';
  jobs = JOBS;
}

var JOBS: Job[] = [
   {
      "name": "config-provider-model",
      "url": "https://ci.jenkins.io/job/Libraries/job/config-provider-model/",
      "color": "blue"
   },
   {
      "name": "dom4j",
      "url": "https://ci.jenkins.io/job/Libraries/job/dom4j/",
      "color": "blue"
    },
    {
      "name": "jelly",
      "url": "https://ci.jenkins.io/job/Libraries/job/jelly/",
      "color": "red"
    },
    {
      "name": "lib-jenkins-maven-artifact-manager",
      "url": "https://ci.jenkins.io/job/Libraries/job/lib-jenkins-maven-artifact-manager/",
      "color": "blue"
    },
    {
      "name": "lib-jenkins-maven-embedder",
      "url": "https://ci.jenkins.io/job/Libraries/job/lib-jenkins-maven-embedder/",
      "color": "yellow"
    },
    {
      "name": "lib-jira-api",
      "url": "https://ci.jenkins.io/job/Libraries/job/lib-jira-api/",
      "color": "red"
    },
    {
      "name": "maven-hpi-plugin",
      "url": "https://ci.jenkins.io/job/Libraries/job/maven-hpi-plugin/",
      "color": "blue"
    },
    {
      "name": "maven-interceptors",
      "url": "https://ci.jenkins.io/job/Libraries/job/maven-interceptors/",
      "color": "blue"
    }
];