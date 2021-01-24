import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project-charts',
  templateUrl: './project-charts.component.html',
  styleUrls: ['./project-charts.component.scss']
})
export class ProjectChartsComponent implements OnInit {

  @Input() data;

  colorScheme = {
    domain: ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#6495ED', '#CCCCFF']
  };

  constructor() { }

  ngOnInit(): void {
  }
}
