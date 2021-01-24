import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ProjectService} from '../shared/services/project.service';
import {Project} from '../shared/models/project.model';
import {SelectionEvent} from '@progress/kendo-angular-grid';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ProjectEditFormComponent} from './project-edit-form/project-edit-form.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  public projects: Project[];

  constructor(private projectService: ProjectService, private router: Router, public dialog: MatDialog) { }

  isLoaded = true;
  sub1: Subscription;
  isRowSelected = false;
  selectedRow: Project;
  isSelectedRowBlank = false;
  isSelectedRowActive = false;
  isNew: boolean;
  showClosed = false;
  public editDataItem: Project;

  ngOnInit(): void {
    if (!this.showClosed) {
      this.sub1 = this.projectService.getActiveProjects()
        .subscribe(projects => this.projects = projects);
    } else {
      this.sub1 = this.projectService.getProjects()
        .subscribe(projects => this.projects = projects);
    }
  }

  onGridSelectionChange(event: SelectionEvent): void  {
    this.selectedRow = event.selectedRows[0].dataItem;
    this.isSelectedRowBlank = this.selectedRow.earnings === 0 && this.selectedRow.consumption === 0;
    this.isSelectedRowActive = this.selectedRow.active;
    this.isRowSelected = true;
  }

  test(event): void {
    // console.log(event.checked);
    this.showClosed = event.checked;
    this.onRefresh();
  }

  closeProject(): void {
    this.selectedRow.active = false;
    console.log(this.selectedRow);
    this.projectService.updateProject(this.selectedRow).subscribe(() => this.onRefresh());
  }

  public openProject(): void {
    this.router.navigate(['system/project', this.selectedRow._id]);
  }

  openDialog(value, isNew: boolean): void {
    const dialogRef = this.dialog.open(ProjectEditFormComponent, {
      data: {
        isNew,
        value
      }
    });

    dialogRef.afterClosed().subscribe((result: Project) => {
      if (result != null) {
        console.log(result);
        this.saveHandler(result, isNew);
      }
    });
  }

  public addHandler(): void {
    this.editDataItem = new Project();
    this.isNew = true;
    this.openDialog(this.editDataItem, this.isNew);
  }

  public editHandler(): void {
    this.isNew = false;
    this.openDialog(this.selectedRow, this.isNew);
  }

  public removeHandler(): void {
    this.projectService.deleteProject(this.selectedRow._id).subscribe( () => this.onRefresh());
  }

  public saveHandler(result: Project, isNew: boolean): void {
    if (isNew === true) {
      this.projectService.addProject(result).subscribe( () => this.onRefresh());
    } else if (isNew === false) {
      this.projectService.updateProject(result).subscribe( () => this.onRefresh());
    }
  }

  public onRefresh(): void {
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
