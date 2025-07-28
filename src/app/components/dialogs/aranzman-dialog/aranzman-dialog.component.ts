import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Hotel } from 'src/app/models/hotel';
import { Aranzman } from 'src/app/models/aranzman';
import { HotelService } from 'src/app/services/hotel.service';
import { AranzmanService } from 'src/app/services/aranzman.service';
import { TuristickaAgencija } from 'src/app/models/turisticka-agencija';
import { TuristickaAgencijaService } from 'src/app/services/turisticka-agencija.service';

// Testing pipeline #1

@Component({
  selector: 'app-aranzman-dialog',
  templateUrl: './aranzman-dialog.component.html',
  styleUrls: ['./aranzman-dialog.component.css']
})
export class AranzmanDialogComponent implements OnInit{


  flag!:number;
  hoteli!:Hotel[];
  turistickeAgencije!:TuristickaAgencija[];

  constructor(public snackBar:MatSnackBar,
              public dialogRef: MatDialogRef<Aranzman>,
              @Inject(MAT_DIALOG_DATA) public data: Aranzman,
              public AranzmanService:AranzmanService,
              public hotelService:HotelService,
              public turistickaAgencijaService:TuristickaAgencijaService){}
  ngOnInit(): void {
    
    this.hotelService.getAllHotel().subscribe(
      data => {
        this.hoteli = data; 
      }
    )

    this.turistickaAgencijaService.getAllTuristickaAgencija().subscribe(
      data => {
        this.turistickeAgencije = data; 
      }
    )
    
  }


  public add():void{
    this.AranzmanService.addAranzman(this.data).subscribe(
      () => {
        this.snackBar.open('Aranzman je uspesno dodat!', 'Ok', {duration:4500});
      }
    ),
    (error: Error)=> {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok',{duration:2500});
    }
    
  }

  public update():void{
    this.AranzmanService.updateAranzman(this.data).subscribe(
      () => {
        this.snackBar.open('Aranzman sa ID: ' + this.data.id + ' je uspesno izmenjena!', 'Ok', {duration:4500});
      }
    ),
    (error: Error)=> {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok',{duration:2500});
    }
    
  }

  public delete():void{
    this.AranzmanService.deleteAranzman(this.data.id).subscribe(
      () => {
        this.snackBar.open('Aranzman je izbrisan', 'Ok', {duration:4500});
      }
    ),
    (error: Error)=> {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok',{duration:2500});
    }
    
  }

  public cancel():void{
    this.dialogRef.close();
    this.snackBar.open('Odustali ste od izmena', 'Ok',{duration:4500});
  }

  public compare(a:any,b:any){
    return a.id==b.id;
  }
}

