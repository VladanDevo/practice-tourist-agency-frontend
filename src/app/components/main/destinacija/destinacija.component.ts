import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Destinacija } from 'src/app/models/destinacija';
import {DestinacijaService} from 'src/app/services/destinacija.service';
import { DestinacijaDialogComponent } from '../../dialogs/destinacija-dialog/destinacija-dialog.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-destinacija',
  templateUrl: './destinacija.component.html',
  styleUrls: ['./destinacija.component.css']
})
export class DestinacijaComponent implements OnInit, OnDestroy{


  dataSource!: MatTableDataSource<Destinacija>;
  displayedColumns = ['id','mesto','opis','drzava','actions'];
  subscription!:Subscription;
  @ViewChild(MatSort, {static:false}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!:MatPaginator;
  constructor(private destinacijaService: DestinacijaService,
              public dialog: MatDialog){

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.loadData();
  }

  
  public loadData(){
    this.subscription =this.destinacijaService.getAllDestinacija().subscribe(
      data => {this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }),
      (error:Error) => {console.log(error.name + " " + error.message);}
      
  }

  public openDialog(flag:number, id?:number, mesto?:string, opis?:string, drzava?:string):void{

    const dialogRef = this.dialog.open(DestinacijaDialogComponent,{data: {id,mesto,drzava,opis}})  
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

