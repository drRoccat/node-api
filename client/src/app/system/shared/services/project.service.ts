import {BaseApi} from '../../../shared/core/base-api';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Project} from '../models/project.model';
import {Observable} from 'rxjs';


@Injectable()
export class ProjectService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  addProject(project: Project): Observable<Project> {
    return this.post('projects', project);
  }

  getProjects(): Observable<Project[]> {
    return this.get('projects');
  }

  getActiveProjects(): Observable<Project[]> {
    return this.get('projects/active');
  }

  updateProject(project: Project): Observable<Project> {
    return this.put(`projects/${project._id}`, project);
  }

  getProjectById(id: string): Observable<Project> {
    return this.get(`projects/${id}`);
  }

  deleteProject(id: string): Observable<Project> {
    return this.delete(`projects/${id}`);
  }
}
