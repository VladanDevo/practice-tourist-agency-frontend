import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TuristickaAgencija } from 'src/app/models/turisticka-agencija';
import { TuristickaAgencijaService } from 'src/app/services/turisticka-agencija.service';

@Component({
  selector: 'app-turisticka-agencija-dialog',
  templateUrl: './turisticka-agencija-dialog.component.html',
  styleUrls: ['./turisticka-agencija-dialog.component.css']
})
export class TuristickaAgencijaDialogComponent {


  flag!:number;

  constructor(public snackBar:MatSnackBar,
              public dialogRef: MatDialogRef<TuristickaAgencija>,
              @Inject(MAT_DIALOG_DATA) public data: TuristickaAgencija,
              public turistickaAgencijaService:TuristickaAgencijaService){}


  public add():void{
    this.turistickaAgencijaService.addTuristickaAgencija(this.data).subscribe(
      () => {
        this.snackBar.open('Turisticka agencija sa nazivom: ' + this.data.naziv + ' je uspesno dodat!', 'Ok', {duration:4500});
      }
    ),
    (error: Error)=> {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok',{duration:2500});
    }
    
  }

  public update():void{
    this.turistickaAgencijaService.updateTuristickaAgencija(this.data).subscribe(
      () => {
        this.snackBar.open('Turisticka agencija sa ID: ' + this.data.id + ' je uspesno izmenjena!', 'Ok', {duration:4500});
      }
    ),
    (error: Error)=> {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Dogodila se greska', 'Ok',{duration:2500});
    }
    
  }

  public delete():void{
    this.turistickaAgencijaService.deleteTuristickaAgencija(this.data.id).subscribe(
      () => {
        this.snackBar.open('Turisticka agencija je izbrisana', 'Ok', {duration:4500});
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

  
}
