import { AccessoiresProjet } from "./AccessoiresProjet";
import { PieceVue } from "./PieceVue";

export class PieceProjet{
    id: number;
    idprojet: number;
    idpiecevue:number;
    // nompiece: string;
    nbr: number;
    AccessoiresProjet:AccessoiresProjet[];
    pieces:PieceVue[];
}