import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Destinacija } from 'src/app/models/destinacija';
import { Hotel } from 'src/app/models/hotel';
import {HotelService} from 'src/app/services/hotel.service';
import { HotelDialogComponent } from '../../dialogs/hotel-dialog/hotel-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit, OnDestroy{


  dataSource!: MatTableDataSource<Hotel>;
  displayedColumns = ['id','naziv','brojZvezdica', 'opis', 'destinacija' ,'actions'];
  subscription!:Subscription;
  @ViewChild(MatSort, {static:false}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!:MatPaginator;
  constructor(private hotelService: HotelService,
              public dialog: MatDialog){

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.loadData();
  }

  
  public loadData(){
    this.subscription =this.hotelService.getAllHotel().subscribe(
      data => {this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }),
      (error:Error) => {console.log(error.name + " " + error.message);}
      
  }

  public openDialog(flag:number, id?:number, naziv?:string, brojZvezdica?:number, opis?:string, destinacija?:Destinacija):void{

    const dialogRef = this.dialog.open(HotelDialogComponent,{data: {id,naziv,brojZvezdica,opis, destinacija}})  
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(
      result =>{
        if(result == 1){
          this.loadData();
        }
      }
    )
  }

  public applyFilter(filter:any){
    filter = filter.target.value;
    filter = filter.trim();
    filter = filter.toLocaleLowerCase();
    this.dataSource.filter = filter;
  }
}