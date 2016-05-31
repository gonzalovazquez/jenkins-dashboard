import { Injectable } from '@angular/core';
import { Job } from './job';
import { JOBS } from './mock-jenkins';

@Injectable()
export class JenkinsDashboardService {
    getJobs(){
        return Promise.resolve(JOBS);
    }
}
