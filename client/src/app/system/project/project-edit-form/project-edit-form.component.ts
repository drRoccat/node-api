import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Project} from '../../shared/models/project.model';

@Component({
  selector: 'app-project-edit-form',
  templateUrl: './project-edit-form.component.html',
  styleUrls: ['./project-edit-form.component.scss']
})
export class ProjectEditFormComponent implements OnInit {

  public listBill: Array<string> = ['PLN', 'EUR'];

  public editForm: FormGroup = new FormGroup({
    _id: new FormControl(),
    name: new FormControl(null, Validators.required),
    earnings: new FormControl(null, Validators.required),
    consumption: new FormControl(null, Validators.required),
    profit: new FormControl(null, Validators.required),
    plannedProfit: new FormControl(null, Validators.required),
    relevance: new FormControl(null, Validators.required),
    currency: new FormControl(null, Validators.required),
    active: new FormControl(true)
  });

  constructor(public dialogRef: MatDialogRef<ProjectEditFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any)
  {
    if (data.isNew === false) {
      this.editForm.patchValue({
        _id: data.value._id,
        name: data.value.name,
        earnings: data.value.earnings,
        consumption: data.value.consumption,
        profit: data.value.profit,
        plannedProfit: data.value.plannedProfit,
        relevance: data.value.relevance,
        currency: data.value.currency,
        active: data.value.active
      });
    }
  }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data.isNew === true) {
      this.editForm.patchValue({
        earnings: 0,
        consumption: 0,
        profit: 0,
        relevance: 0
      });
    }
  }

  public onSave(): void {
    const category = new Project(this.editForm.value);
    this.dialogRef.close(category);
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

}
