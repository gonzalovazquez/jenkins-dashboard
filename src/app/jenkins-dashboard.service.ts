import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Job } from './job';
import { Observable } from 'rxjs/Observable';
//import { JOBS } from './mock-jenkins';

@Injectable()
export class JenkinsDashboardService {
    constructor(private http:Http) {}
    
    private jenkinsURL = 'https://jenkins-dashboard-api.herokuapp.com/api/job/Libraries';  // URL to web API
    
    getJobs (): Observable<Job[]> {
        return this.http.get(this.jenkinsURL)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body.data || { };
    }
    
    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
     }
  
}
