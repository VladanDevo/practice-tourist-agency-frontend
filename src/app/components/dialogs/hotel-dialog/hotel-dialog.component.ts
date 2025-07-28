import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Destinacija } from 'src/app/models/destinacija';
import { Hotel } from 'src/app/models/hotel';
import { DestinacijaService } from 'src/app/services/destinacija.service';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-hotel-dialog',
  templateUrl: './hotel-dialog.component.html',
  styleUrls: ['./hotel-dialog.component.css']
})
export class HotelDialogComponent implements OnInit{


  flag!:number;
  destinacije!:Destinacija[];

  constructor(public snackBar:MatSnackBar,
              public dialogRef: MatDialogRef<Hotel>,
              @Inject(MAT_DIALOG_DATA) public data: Hotel,
              public hotelService:HotelService,
              public destinacijaService:DestinacijaService){}
  ngOnInit(): void {
    
    this.destinacijaService.getAllDestinacija().subscribe(
      data => {
        this.destinacije = data; 
      }
    )
    
  }


  public add():void{
    this.hotelService.addHotel(this.data).subscribe(
      () => {
        this.snackBar.open('Hotel sa nazivom: ' + this.data.naziv + ' je uspesno dodat!', 'Ok', {duration:4500});
      }
    ),
    (error: Error)=> {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok',{duration:2500});
    }
    
  }

  public update():void{
    this.hotelService.updateHotel(this.data).subscribe(
      () => {
        this.snackBar.open('Hotel sa ID: ' + this.data.id + ' je uspesno izmenjena!', 'Ok', {duration:4500});
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok',{duration:2500});
    }
    
  }

  public delete():void{
    this.hotelService.deleteHotel(this.data.id).subscribe(
      () => {
        this.snackBar.open('Hotel je izbrisan', 'Ok', {duration:4500});
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

