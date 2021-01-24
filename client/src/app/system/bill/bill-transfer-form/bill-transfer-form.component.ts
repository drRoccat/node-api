import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-bill-transfer-form',
  templateUrl: './bill-transfer-form.component.html',
  styleUrls: ['./bill-transfer-form.component.scss']
})
export class BillTransferFormComponent implements OnInit {


  public transferData = [];
  public qwe = 1;

  constructor(
    public dialogRef: MatDialogRef<BillTransferFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {
    this.transferData.push(this.data.bills[0]);
    this.transferData.push(this.data.bills[1]);
  }

  ngOnInit(): void {
  }

  change(): void {
    this.transferData.reverse();
  }

  public onSave(): void {
    const transferEvent = {
      from: this.transferData[0],
      to: this.transferData[1],
      value: this.qwe,
      rate: this.data.currency
    };
    this.dialogRef.close(transferEvent);
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

}
