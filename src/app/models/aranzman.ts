import { TuristickaAgencija } from "./turisticka-agencija";
import { Hotel } from "./hotel";

export class Aranzman {
    id!:number;
    ukupna_cena!: number;
    placeno!:boolean;
    datum_realizacije!: Date;
    turistickaAgencija!:TuristickaAgencija
    hotel!:Hotel;
}