import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Aranzman } from 'src/app/models/aranzman';
import {AranzmanService} from 'src/app/services/aranzman.service';
import { AranzmanDialogComponent } from '../../dialogs/aranzman-dialog/aranzman-dialog.component';
import { TuristickaAgencija } from 'src/app/models/turisticka-agencija';
import { Hotel } from 'src/app/models/hotel';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-aranzman',
  templateUrl: './aranzman.component.html',
  styleUrls: ['./aranzman.component.css']
})
export class AranzmanComponent implements OnChanges{


  dataSource!: MatTableDataSource<Aranzman>;
  displayedColumns = ['id','ukupna_cena','placeno', 'datum_realizacije', 'hotel' ,'actions'];
  subscription!:Subscription;

  @ViewChild(MatSort, {static:false}) sort!:MatSort;
  @ViewChild(MatPaginator, {static:false}) paginator!:MatPaginator;

  @Input() childSelectedAgencija!:TuristickaAgencija;
  constructor(private aranzmanService: AranzmanService,
              public dialog: MatDialog){

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.childSelectedAgencija.id){
      this.loadData();
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

  
  public loadData(){
    this.subscription =this.aranzmanService.getAranzmaniForAgencije(this.childSelectedAgencija.id).subscribe(
      data => {this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }),
      (error:Error) => {console.log(error.name + " " + error.message);}
      
  }
  public openDialog(flag:number, id?:number, ukupna_cena?:number, placeno?:boolean, datum_realizacije?:Date,  hotel?:Hotel):void{

    const dialogRef = this.dialog.open(AranzmanDialogComponent,{data: {id,ukupna_cena,placeno,datum_realizacije,hotel}})  
    dialogRef.componentInstance.flag = flag;
    dialogRef.componentInstance.data.turistickaAgencija = this.childSelectedAgencija;
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
