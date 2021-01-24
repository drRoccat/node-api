import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {SystemComponent} from './system.component';
import {BillComponent} from './bill/bill.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {ProjectComponent} from './project/project.component';
import {ProjectDetailComponent} from './project/project-detail/project-detail.component';
import {ReportComponent} from './report/report.component';


const routes: Routes = [
  {path : 'system', component: SystemComponent, children: [
      {path : 'bill', component: BillComponent},
      {path : 'history', component: HistoryPageComponent},
      {path : 'project', component: ProjectComponent},
      {path : 'project/:id', component: ProjectDetailComponent},
      {path : 'report', component: ReportComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {

}
