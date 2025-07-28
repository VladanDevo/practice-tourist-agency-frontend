import { AranzmanComponent } from './components/main/aranzman/aranzman.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinacijaComponent } from './components/main/destinacija/destinacija.component';
import { HotelComponent } from './components/main/hotel/hotel.component';
import { TuristickaAgencijaComponent } from './components/main/turisticka-agencija/turisticka-agencija.component';
import { AboutComponent } from './components/utility/about/about.component';
import { AuthorComponent } from './components/utility/author/author.component';
import { HomeComponent } from './components/utility/home/home.component';

const routes: Routes = [
  {path: 'turistickaAgencija', component: TuristickaAgencijaComponent},
  {path: 'destinacija', component: DestinacijaComponent},
  {path: 'hotel', component: HotelComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'aranzman', component: AranzmanComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
