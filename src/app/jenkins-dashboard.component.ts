import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { Job } from './job';
import {JenkinsDashboardService} from './jenkins-dashboard.service';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'jenkins-dashboard-app',
  templateUrl: 'jenkins-dashboard.component.html',
  styleUrls: ['jenkins-dashboard.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES],
  providers:[JenkinsDashboardService]
})
export class JenkinsDashboardAppComponent implements OnInit {
  title = 'Jenkins Dashboard';
  jobs:Job[];
    
  constructor(private jenkinsService: JenkinsDashboardService) { }
  
  getJobs() {
    this.jenkinsService.getJobs().then(jobs => this.jobs = jobs);
  }
  
  ngOnInit() {
    this.getJobs();
  }
    
}