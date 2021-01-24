import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CategoriesService} from '../../../shared/services/category.service';
import {Category} from '../../../shared/models/category.model';
import {EditCategoryFormComponent} from './edit-category-form/edit-category-form.component';
import {GridComponent, SelectionEvent} from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() projectId;
  @Input() projectName;
  @Input() printName: string;
  @Input() print: boolean;
  @Output() refresh = new EventEmitter<boolean>();

  @ViewChild('grid') grid: GridComponent;

  sub1: Subscription;
  isLoaded = false;
  isRowSelected = false;
  isSelectedRowBlank = false;
  selectedRow: Category;

  public categories: Category[];
  public isNew: boolean;
  public editDataItem: Category;
  public fileName;


  constructor(private categoryService: CategoriesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sub1 = this.categoryService.getCategoryByProjectId(this.projectId).subscribe((categories: Category[]) =>
    {
      this.categories = categories;
      this.isLoaded = true;
    });
  }

  ngAfterViewInit(): void {
    if (this.print === true) {
      this.fileName = this.printName + '(category).pdf';
      setTimeout(() => {
        if (this.isLoaded === true) {
          this.exportToPDF();
        }
      }, 3000);
    }
  }

  public exportToPDF(): void {
    this.grid.saveAsPDF();
    this.refresh.emit(true);
  }

  onGridSelectionChange(event: SelectionEvent): void  {
    this.selectedRow = event.selectedRows[0].dataItem;
    this.isSelectedRowBlank = this.selectedRow.income === 0 && this.selectedRow.outcome === 0;
    this.isRowSelected = true;
  }

  openDialog(value, isNew: boolean): void {
    const dialogRef = this.dialog.open(EditCategoryFormComponent, {
      data: {
        isNew,
        value
      }
    });

    dialogRef.afterClosed().subscribe((result: Category) => {
      if (result != null) {
        this.saveHandler(result, isNew);
      }
    });
  }

  public addHandler(): void {
    this.editDataItem = new Category();
    this.isNew = true;
    this.openDialog(this.editDataItem, this.isNew);
  }

  public editHandler(): void {
    this.isNew = false;
    this.openDialog(this.selectedRow, this.isNew);
  }

  public removeHandler(): void {
    this.categoryService.deleteCategory(this.selectedRow._id).subscribe( () => this.onRefresh());
  }

  public saveHandler(result: Category, isNew: boolean): void {
    if (isNew === true) {
      result.projectId = this.projectId;
      this.categoryService.addCategory(result).subscribe( () => this.onRefresh());
    } else if (isNew === false) {
      this.categoryService.updateCategory(result).subscribe( () => this.onRefresh());
    }
  }

  public onRefresh(): void {
    this.isLoaded = false;
    this.refresh.emit(true);
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
