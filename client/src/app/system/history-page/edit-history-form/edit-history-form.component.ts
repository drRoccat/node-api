import {Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HistoryEvent} from '../../shared/models/event.model';
import {Subscription} from 'rxjs';
import {CategoriesService} from '../../shared/services/category.service';
import {ProjectService} from '../../shared/services/project.service';
import {tap} from 'rxjs/operators';




@Component({
  selector: 'app-edit-history-form',
  templateUrl: './edit-history-form.component.html',
  styleUrls: ['./edit-history-form.component.scss']
})
export class EditHistoryFormComponent implements OnInit, OnDestroy {

  public viewMod = false;
  sub1: Subscription;
  sub2: Subscription;

  public listType: Array<string> = ['INCOME', 'OUTCOME'];
  public listBill: Array<string> = ['PLN', 'EUR'];
  public projects = [];
  public categories = [];
  public listCategory = [];
  public listProject = [];
  public readonlyPro = false;
  public readonlyCat = false;


  public editForm: FormGroup = new FormGroup({
    _id: new FormControl(),
    type: new FormControl(null, Validators.required),
    amount: new FormControl(null, Validators.required),
    project: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    bill: new FormControl(null, Validators.required)
  });


  constructor(
    public dialogRef: MatDialogRef<EditHistoryFormComponent>,
    private categoryService: CategoriesService,
    private projectService: ProjectService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data.isNew === false) {
      this.editForm.patchValue({
        _id: data.value._id,
        type: data.value.type,
        amount: data.value.amount,
        project: data.value.project,
        category: data.value.category,
        date: new Date(data.value.date),
        description: data.value.description,
        bill: data.value.bill
      });
      if (data.isDisabled === true) {
        this.editForm.disable();
        this.viewMod = true;
      }
    }
  }

  ngOnInit(): void {

    this.sub1 = this.categoryService.getCategories()
      .pipe(
        tap(categories => categories.map(category => this.categories.push(category))),

      ).subscribe();

    if (this.data.project !== undefined) {
      console.log(this.data.project , 'qwe');
    }

    this.sub2 = this.projectService.getProjects()
      .pipe(
        tap(projects => projects.map(pro => this.listProject.push(pro.name))),
        tap(projects => projects.map( pro => this.projects.push(pro))),
      ).subscribe(() => {
        if (this.editForm.get('project').value !== null) {
          this.setValues(this.editForm.get('project').value, 'edit');
        } else if (this.editForm.get('project').value === null) {
          this.setValues(this.editForm.get('project').value, 'new');
        }
      });

    this.editForm.get('project').valueChanges.subscribe(
      projectValue => this.setValues(projectValue, 'reset'));
  }

  setValues(projectValue: string, mode: string): void {
    this.listCategory = [];
    if (mode === 'reset') {
      this.editForm.get('category').setValue('');
    }
    if (mode !== 'new') {
      const project = this.projects
        .find(pro => pro.name === projectValue);

      this.editForm.get('bill').setValue(project.currency);

      this.categories.filter(category => category.projectId.includes(project._id))
        .filter( cat => this.listCategory.push(cat.name));
    }

    if (mode === 'edit') {
      // this.editForm.get('category').disable();
      // this.readonly = true;
      this.readonlyPro = true;
      this.readonlyCat = true;
    }

    if (mode === 'new' && this.data.project !== undefined) {
      const project = this.projects
        .find(pro => pro._id === this.data.project);
      this.editForm.get('project').setValue(project.name);
      // this.editForm.get('project').disable();
      this.readonlyPro = true;
    }
  }

  public onSave(): void {
    const bus = new HistoryEvent(this.editForm.value);
    this.dialogRef.close(bus);
  }

  public onCancel(): void {
    this.dialogRef.close();
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
