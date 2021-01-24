import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BillComponent } from './bill/bill.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BillCardComponent } from './bill/bill-card/bill-card.component';
import {BillService} from './shared/services/bill.service';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { BillRateComponent } from './bill/bill-rate/bill-rate.component';
import {MatTableModule} from '@angular/material/table';
import { HistoryPageComponent } from './history-page/history-page.component';
import {BodyModule, ColumnResizingService, GridModule, PDFModule, SharedModule} from '@progress/kendo-angular-grid';
import {EventsService} from './shared/services/event.service';
import {CategoriesService} from './shared/services/category.service';
import {ButtonModule} from '@progress/kendo-angular-buttons';
import { EditHistoryFormComponent } from './history-page/edit-history-form/edit-history-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogModule } from '@progress/kendo-angular-dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {DatePickerModule} from '@progress/kendo-angular-dateinputs';
import {NumericTextBoxModule} from '@progress/kendo-angular-inputs';
import {ProjectService} from './shared/services/project.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ProjectChartsComponent } from './project/project-charts/project-charts.component';
import {PieChartModule} from '@swimlane/ngx-charts';
import {MatTabsModule} from '@angular/material/tabs';
import { CategoryComponent } from './project/project-detail/category/category.component';
import { EditCategoryFormComponent } from './project/project-detail/category/edit-category-form/edit-category-form.component';
import { BillTransferFormComponent } from './bill/bill-transfer-form/bill-transfer-form.component';
import { ProjectEditFormComponent } from './project/project-edit-form/project-edit-form.component';
import {PDFExportModule} from '@progress/kendo-angular-pdf-export';
import { ReportComponent } from './report/report.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    MatCardModule,
    MatTableModule,
    GridModule,
    BodyModule,
    SharedModule,
    ButtonModule,
    MatDialogModule,
    DialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    DropDownsModule,
    DatePickerModule,
    NumericTextBoxModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    PieChartModule,
    MatTabsModule,
    FormsModule,
    PDFExportModule,
    PDFModule,
    MatStepperModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  declarations: [
    SystemComponent,
    HeaderComponent,
    NavbarComponent,
    BillComponent,
    BillCardComponent,
    BillRateComponent,
    HistoryPageComponent,
    EditHistoryFormComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectChartsComponent,
    CategoryComponent,
    EditCategoryFormComponent,
    BillTransferFormComponent,
    ProjectEditFormComponent,
    ReportComponent
  ],
  providers: [BillService, ColumnResizingService, EventsService, CategoriesService, ProjectService]
})
export class SystemModule {}
