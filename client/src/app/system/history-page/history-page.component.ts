import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {HistoryEvent} from '../shared/models/event.model';
import {Subscription} from 'rxjs';
import {EventsService} from '../shared/services/event.service';
import {SafeStyle} from '@angular/platform-browser';
import {GridComponent, SelectionEvent} from '@progress/kendo-angular-grid';
import {MatDialog} from '@angular/material/dialog';
import {EditHistoryFormComponent} from './edit-history-form/edit-history-form.component';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() projectId;
  @Input() projectName;
  @Input() print: boolean;
  @Input() printName: string;
  @Output() refresh = new EventEmitter<boolean>();

  @ViewChild('grid') grid: GridComponent;

  public events: HistoryEvent[];

  constructor(private eventService: EventsService, public dialog: MatDialog) { }

  isLoaded = false;
  isRowSelected = false;
  sub1: Subscription;
  selectedRow;

  public isNew: boolean;
  public editDataItem: HistoryEvent;
  public fileName;

  ngOnInit(): void {
    if (this.projectId === undefined) {
      this.sub1 = this.eventService.getEvents().subscribe((events: HistoryEvent[]) =>
      {
        events.filter(ev => ev.date = new Date(ev.date));
        // @ts-ignore
        const sortedActivities = events.sort((a, b) => a.date - b.date);
        // console.log(sortedActivities);
        this.events = sortedActivities;
        this.isLoaded = true;
      });
    } else {
      this.sub1 = this.eventService.getEventByProjectId(this.projectId)
        .subscribe(x => {
          x.filter(ev => ev.date = new Date(ev.date));
          // @ts-ignore
          const sortedActivities = x.sort((a, b) => a.date - b.date);
          this.events = sortedActivities;
          this.isLoaded = true;
        });
    }
  }

  ngAfterViewInit(): void {
    if (this.print === true) {
      this.fileName = this.printName + '(history).pdf';
      setTimeout(() => {
        if (this.isLoaded === true) {
          this.exportToPDF();
        }
      }, 3000);
    }
  }

  onGridSelectionChange(event: SelectionEvent): void  {
    this.selectedRow = event.selectedRows[0].dataItem;
    this.isRowSelected = true;
  }

  openDialog(value, isNew: boolean, isDisabled?: boolean): void {
    const dialogRef = this.dialog.open(EditHistoryFormComponent, {
      data: {
        isNew,
        value,
        isDisabled,
        project: this.projectId
      }
    });

    dialogRef.afterClosed().subscribe((result: HistoryEvent) => {
      if (result != null) {
        this.saveHandler(result, isNew);
      }
    });
  }

  public addHandler(): void {
    this.editDataItem = new HistoryEvent();
    this.isNew = true;
    this.openDialog(this.editDataItem, this.isNew);
  }

  public editHandler(isDisabled?: boolean): void {
    this.isNew = false;
    this.openDialog(this.selectedRow, this.isNew, isDisabled);
  }

  public removeHandler(): void {
    this.eventService.deleteEvent(this.selectedRow._id).subscribe( () => this.onRefresh());
  }

  public saveHandler(result: HistoryEvent, isNew: boolean): void {
    if (isNew === true) {
      this.eventService.addEvent(result).subscribe( () => this.onRefresh());
    } else if (isNew === false) {
      this.eventService.updateEvent(result).subscribe( () => this.onRefresh());
    }
  }

  public exportToPDF(): void {
    this.grid.saveAsPDF();
    this.refresh.emit(true);
  }



  public onRefresh(): void {
    this.isLoaded = false;
    this.refresh.emit(true);
    this.ngOnInit();
  }

  public getClass(item: HistoryEvent): SafeStyle {

    return {
      label: true,
      'label-danger': item.type === 'OUTCOME',
      'label-success': item.type === 'INCOME'
    };
  }

  ngOnDestroy(): void {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}
