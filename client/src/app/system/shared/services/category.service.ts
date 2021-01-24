import {BaseApi} from '../../../shared/core/base-api';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Category} from '../models/category.model';
import {Observable} from 'rxjs';


@Injectable()
export class CategoriesService extends BaseApi {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
  }

  addCategory(category: Category): Observable<Category> {
    return this.post('categories', category);
  }

  getCategories(): Observable<Category[]> {
    return this.get('categories');
  }

  updateCategory(category: Category): Observable<Category> {
    return this.put(`categories/${category._id}`, category);
  }

  deleteCategory(id: string): Observable<Category> {
    return this.delete(`categories/${id}`);
  }

  getCategoryById(id: string): Observable<Category> {
    return this.get(`categories/${id}`);
  }

  getCategoryByProjectId(id: string): Observable<Category[]> {
    return this.get(`categories/pro/${id}`);
  }
}
