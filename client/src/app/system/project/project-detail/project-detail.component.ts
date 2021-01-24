import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';
import {ProjectService} from '../../shared/services/project.service';
import {map, mergeMap, tap} from 'rxjs/operators';
import {Project} from '../../shared/models/project.model';
import {Category, ChartCategory} from '../../shared/models/category.model';
import {CategoriesService} from '../../shared/services/category.service';
import {MatDialog} from '@angular/material/dialog';
import {GridComponent} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit , OnDestroy{

  @ViewChild('pdf') pdf;

  sub1: Subscription;
  sub2: Subscription;
  project: Project;
  categories: Category;
  isLoaded = false;
  outcomeChartData = [];
  incomeChartData = [];

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private categoryService: CategoriesService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.isLoaded = false;
    this.sub1 = this.route.params.pipe(
      mergeMap((params: Params) => this.projectService.getProjectById(params.id))
    ).subscribe((pro: Project) => {
      this.project = pro;
      this.calculateChartData();
    });
  }

  calculateChartData(): void {

    this.categoryService.getCategoryByProjectId(this.project._id)
      .subscribe(categories => {
        this.outcomeChartData = categories.map(cat => new ChartCategory(cat, 'outcome'));
        this.incomeChartData = categories.map(cat => new ChartCategory(cat, 'income'));
      });
    this.isLoaded = true;
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }

}
