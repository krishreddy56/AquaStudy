import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatSort, MatPaginator, MatTableDataSource} from '@angular/material';
import { MeasuresService } from '../../measures.service';
import { Measure } from '../../measure.model';
import { ChartDisplayComponent } from '../chart-display/chart-display.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})

export class TableDisplayComponent implements OnInit, AfterViewInit {
  panelOpenState = false;
  loading: boolean = false;
  measures: Measure[];
  displayedColumns: string[] = ['TimeStamp', 'Flow', 'Pressure'];
  public dataSource = new MatTableDataSource<Measure>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private measureSvc: MeasuresService, public dialog: MatDialog, private router: Router) {}
  openDialog() {
    const dialogRef = this.dialog.open(ChartDisplayComponent, {
      height: '600px',
      width: '1000px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
    this.fetchMeasures();
    }
    ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
    fetchMeasures() {
      this.measureSvc
        .getMeasures()
        .subscribe((data) => {
        this.dataSource.data = data as Measure[];
        console.log(this.measures);
    });
    // console.log('This is my' + dataSource);
    // dataSource.sort = this.sort;
    // dataSource.paginator = this.paginator;
}
}

