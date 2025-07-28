import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { TuristickaAgencija } from 'src/app/models/turisticka-agencija';
import {TuristickaAgencijaService} from 'src/app/services/turisticka-agencija.service';
import { TuristickaAgencijaDialogComponent } from '../../dialogs/turisticka-agencija-dialog/turisticka-agencija-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-turisticka-agencija',
  templateUrl: './turisticka-agencija.component.html',
  styleUrls: ['./turisticka-agencija.component.css']
})
export class TuristickaAgencijaComponent implements OnInit, OnDestroy{


  dataSource!: MatTableDataSource<TuristickaAgencija>;
  displayedColumns = ['id','naziv','adresa','kontakt','actions'];
  subscription!:Subscription;

  parentSelectedAgencija!:TuristickaAgencija;

  @ViewChild(MatSort, {static:false}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!:MatPaginator;
  
  constructor(private turistickaAgencijaService: TuristickaAgencijaService,
              public dialog: MatDialog){

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.loadData();
  }

  
  public loadData(){
    this.subscription =this.turistickaAgencijaService.getAllTuristickaAgencija().subscribe(
      data => {this.dataSource = new MatTableDataSource(data);
               this.dataSource.sort=this.sort;
               this.dataSource.paginator=this.paginator;
      
      }),
      (error:Error) => {console.log(error.name + " " + error.message);}
      
  }

  public openDialog(flag:number, id?:number, naziv?:string, adresa?:string, kontakt?:string):void{

    const dialogRef = this.dialog.open(TuristickaAgencijaDialogComponent,{data: {id,naziv,kontakt,adresa}})  
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(
      result =>{
        if(result == 1){
          this.loadData();
        }
      }
    )
  }

  public selectRow(row:TuristickaAgencija){
    this.parentSelectedAgencija= row;
    console.log(row);
  }

  public applyFilter(filter:any){
    filter= filter.target.value;
    filter= filter.trim();
    filter= filter.toLocaleLowerCase();
    this.dataSource.filter=filter;
  }
}
