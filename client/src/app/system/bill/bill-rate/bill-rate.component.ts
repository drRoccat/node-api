import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bill-rate',
  templateUrl: './bill-rate.component.html',
  styleUrls: ['./bill-rate.component.scss']
})
export class BillRateComponent implements OnInit {

  @Input() currency: any;

  currencies: string[] = ['USD', 'EUR'];

  constructor() { }

  ngOnInit(): void {
  }

}
