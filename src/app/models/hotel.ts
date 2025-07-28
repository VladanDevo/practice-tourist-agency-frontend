import { Destinacija } from "./destinacija";


export class Hotel {
    id!:number;
    naziv!:String;
    brojZvezdica!: number;
    opis!:String;
    destinacija!:Destinacija
}