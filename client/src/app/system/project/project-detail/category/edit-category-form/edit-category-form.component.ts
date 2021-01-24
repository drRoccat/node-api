import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Category} from '../../../../shared/models/category.model';

@Component({
  selector: 'app-edit-category-form',
  templateUrl: './edit-category-form.component.html',
  styleUrls: ['./edit-category-form.component.scss']
})
export class EditCategoryFormComponent implements OnInit {

  public editForm: FormGroup = new FormGroup({
    _id: new FormControl(),
    name: new FormControl(null, Validators.required),
    income: new FormControl(null, Validators.required),
    outcome: new FormControl(null, Validators.required),
    projectId: new FormControl()
  });

  constructor(public dialogRef: MatDialogRef<EditCategoryFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any)
  {
    if (data.isNew === false) {
      this.editForm.patchValue({
        _id: data.value._id,
        name: data.value.name,
        income: data.value.income,
        outcome: data.value.outcome,
        projectId: data.value.projectId
      });
    }
  }

  ngOnInit(): void {
    if (this.data.isNew === true) {
      this.editForm.patchValue({
        income: 0,
        outcome: 0
      });
    }
  }

  public onSave(): void {
    const category = new Category(this.editForm.value);
    this.dialogRef.close(category);
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

}
