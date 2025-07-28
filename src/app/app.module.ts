import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import { TuristickaAgencijaComponent } from './components/main/turisticka-agencija/turisticka-agencija.component';
import { DestinacijaComponent } from './components/main/destinacija/destinacija.component';
import { HotelComponent } from './components/main/hotel/hotel.component';
import { AranzmanComponent } from './components/main/aranzman/aranzman.component';
import { HomeComponent } from './components/utility/home/home.component';
import { AboutComponent } from './components/utility/about/about.component';
import { AuthorComponent } from './components/utility/author/author.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TuristickaAgencijaDialogComponent } from './components/dialogs/turisticka-agencija-dialog/turisticka-agencija-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { HotelDialogComponent } from './components/dialogs/hotel-dialog/hotel-dialog.component';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DestinacijaDialogComponent } from './components/dialogs/destinacija-dialog/destinacija-dialog.component';
import { AranzmanDialogComponent } from './components/dialogs/aranzman-dialog/aranzman-dialog.component';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    TuristickaAgencijaComponent,
    DestinacijaComponent,
    HotelComponent,
    AranzmanComponent,
    HomeComponent,
    AboutComponent,
    AuthorComponent,
    TuristickaAgencijaDialogComponent,
    HotelDialogComponent,
    DestinacijaDialogComponent,
    AranzmanDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    HttpClientModule,
    MatTableModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
