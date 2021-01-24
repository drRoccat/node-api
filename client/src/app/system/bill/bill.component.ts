import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Subscription} from 'rxjs';
import {Bill} from '../shared/models/bill.model';
import {BillService} from '../shared/services/bill.service';
import {MatDialog} from '@angular/material/dialog';
import {BillTransferFormComponent} from './bill-transfer-form/bill-transfer-form.component';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  sub2: Subscription;

  currency: any;
  bill: Bill[];
  isLoaded = false;

  constructor(private billService: BillService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sub1 = combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [Bill[], any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });
  }

  onRefresh(): void {
    this.isLoaded = false;
    this.ngOnInit();
  }

  public transfer(): void {
    const {rates} = this.currency;
    const qwe = this.bill;
    const dialogRef = this.dialog.open(BillTransferFormComponent, {

      data: {
        bills: qwe,
        currency: rates.EUR
      }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result != null) {
        this.billService.transferBill(result).subscribe( () => this.onRefresh());
      }
    });
  }

  ngOnDestroy(): void {
    this.sub1.unsubscribe();
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}
